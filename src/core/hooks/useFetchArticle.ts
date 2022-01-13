/*
* A custom hook to abstract the logic of fetching Article Data
* */

import { useContext, useEffect, useState } from "react";
import { ArticleTypes } from "../interfaces/article.interface";
import {
	UI_STATE_DEFAULT,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../static/constants";
import ArticleAPIService from "../../services/API/ArticleAPI.service";
import { setDocumentTitle } from "../utils";
import { AppContext } from "../../contexts/App.context";

const useFetchArticle = (articlePath: string): [string, ArticleTypes] => {
	const appContext = useContext(AppContext);
	const [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	const [articleData, setArticleData] = useState({} as ArticleTypes);

	useEffect(() => {
		setUIState(UI_STATE_LOADING);

		// TODO: Use Persistent Storage to store and retrieve Cached Article
		if (articlePath !== appContext.articlePath) {
			//	Fetch article here
			ArticleAPIService(articlePath).then(({ status, data }) => {
				if (status) {
					if (data.response.docs.length) {
						setArticleData(data.response.docs[0]);

						// Cache article data
						appContext.setArticleData(data.response.docs[0]);

						// Setting article headline as document title
						setDocumentTitle(data.response.docs[0]?.headline?.print_headline || data.response.docs[0]?.headline?.main || "The New York Times");

						setUIState(UI_STATE_SUCCESS);
					} else {
						setUIState(UI_STATE_EMPTY);
					}
				} else {
					setUIState(UI_STATE_ERROR);
				}
			}).catch(e => {
				console.error(e);
				setUIState(UI_STATE_ERROR);
			});
		} else {
			// Return cached article data
			setArticleData(appContext.articleData);
			setUIState(UI_STATE_SUCCESS);
		}

		// Cache article path
		appContext.setArticlePath(articlePath);

		setDocumentTitle(articleData.headline?.main || articleData.headline?.print_headline || "NYT");
	}, [articlePath]);

	return [uiState, articleData];
};

export default useFetchArticle;
