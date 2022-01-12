/*
* A custom hook to abstract the logic of fetching Article Data
* */

import {useEffect, useState} from "react";
import {ArticleTypes} from "../interfaces/article.interface";
import {
	UI_STATE_DEFAULT,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../static/constants";
import ArticleAPIService from "../../services/API/ArticleAPI.service";
import {setDocumentTitle} from "../utils";

const useFetchArticle = (articlePath: string, prevArticle: ArticleTypes, prevArticlePath: string): [string, ArticleTypes] => {
	const [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	const [articleData, setArticleData] = useState({} as ArticleTypes);

	useEffect(() => {
		setUIState(UI_STATE_LOADING);

		// Only fetch article if it is not cached in context
		if (!prevArticle || articlePath !== prevArticlePath) {
			//	Fetch article here
			ArticleAPIService(articlePath).then(({status, data}) => {
				if (status) {
					if (data.response.docs.length) {
						setArticleData(data.response.docs[0]);
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
			setArticleData(prevArticle);
			setUIState(UI_STATE_SUCCESS);
		}

		setDocumentTitle(articleData.headline?.main || articleData.headline?.print_headline || 'NYT');
	}, [articlePath]);

	return [uiState, articleData];
}

export default useFetchArticle;
