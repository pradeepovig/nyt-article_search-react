/*
* A custom hook to abstract the logic of fetching Article Data
* */

import {useContext, useEffect, useState} from "react";
import {
	UI_STATE_DEFAULT,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../static/constants";
import SearchAPIService from "../../services/API/SearchAPI.service";
// import {AppContext} from "../../contexts/App.context";
import {FetchArticlesResponseTypes} from "../interfaces/article.interface";

const useFetchArticle = (searchQuery: string, page: number): [string, FetchArticlesResponseTypes, number] => {
	// const appContext = useContext(AppContext);
	const [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	const [totalPages, setTotalPages] = useState(0);
	const [articlesData, setArticlesData] = useState({} as FetchArticlesResponseTypes);

	useEffect(() => {
		if (searchQuery.length) {
			setUIState(UI_STATE_LOADING);

			SearchAPIService(searchQuery, page).then(({status, data}) => {
				if(status) {
					setArticlesData(data);

					if (data.response.docs.length) {
						setUIState(UI_STATE_SUCCESS);
					} else {
						setUIState(UI_STATE_EMPTY);
					}

					setTotalPages(data.response.meta.hits ? ( Math.floor(data.response.meta.hits / 10) ) + ( data.response.meta.hits % 10 ) : 0);
				} else {
					setUIState(UI_STATE_ERROR);
				}
			}).catch(e => {
				console.error(e);
				setUIState(UI_STATE_ERROR);
			});
		}
	}, [searchQuery, page]);

	return [uiState, articlesData, totalPages];
}

export default useFetchArticle;
