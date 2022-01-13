/*
* A custom hook to abstract the logic of fetching Article Data
* */

import { useContext, useEffect, useState } from "react";
import {
	UI_STATE_DEFAULT,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../static/constants";
import SearchAPIService from "../../services/API/SearchAPI.service";
import { FetchArticlesResponseTypes } from "../interfaces/article.interface";
import { AppContext } from "../../contexts/App.context";
import { getTotalPages } from "../utils";

const useFetchArticle = (searchQuery: string, page: number): [string, FetchArticlesResponseTypes, number] => {
	const appContext = useContext(AppContext);
	const [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	const [totalPages, setTotalPages] = useState(0);
	const [articlesData, setArticlesData] = useState({} as FetchArticlesResponseTypes);

	useEffect(() => {
		// Set context initially
		appContext.setSearchQuery(searchQuery);
		appContext.setArticlesPage(page);

		if (searchQuery?.length) {
			setUIState(UI_STATE_LOADING);

			// Page index starts from 0
			SearchAPIService(searchQuery, (page - 1)).then(({ status, data }) => {
				if(status) {
					setArticlesData(data);

					if (data.response.docs.length) {
						setUIState(UI_STATE_SUCCESS);
					} else {
						setUIState(UI_STATE_EMPTY);
					}

					setTotalPages(getTotalPages(data.response.meta.hits));
				} else {
					setUIState(UI_STATE_ERROR);
				}
			}).catch(e => {
				console.error(e);
				setUIState(UI_STATE_ERROR);
			});
		} else {
			setUIState(UI_STATE_DEFAULT);
		}
	}, [searchQuery, page]);

	return [uiState, articlesData, totalPages];
};

export default useFetchArticle;
