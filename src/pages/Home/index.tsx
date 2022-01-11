import React, {useContext, useEffect, useState} from "react";
import SearchBar from "../../components/SearchBar";
import SearchAPIService from "../../services/API/SearchAPI.service";
import {AppContext} from "../../contexts/App.context";
import {
	PAGINATION_BWD, UI_STATE_DEFAULT,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../../core/static/constants";
import Pagination from "../../components/Pagination";
import ArticlesList from "../../components/ArticlesList";
import Empty from "../../components/shared/Empty";
import ArticleItemLoader from "../../components/ArticleItemLoader";

const HomePage = (): JSX.Element => {
	const [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const appContext = useContext(AppContext);

	const searchArticles = (page: number) => {
		setUIState(UI_STATE_LOADING);

		SearchAPIService(appContext.searchQuery, page).then(({status, data}) => {
			if(status) {
				appContext.setFetchArticlesResponse(data);

				if (data.response.docs.length) {
					setUIState(UI_STATE_SUCCESS);
				} else {
					setUIState(UI_STATE_EMPTY);
				}

				let pages = data.response.meta.hits ? ( Math.floor(data.response.meta.hits / 10) ) + ( data.response.meta.hits % 10 ) : 0;
				setTotalPages(pages);
			} else {
				setUIState(UI_STATE_ERROR);
			}
		}).catch(e => {
			console.error(e);
			setUIState(UI_STATE_ERROR);
		});
	};

	useEffect(() => {
		// When user navigates back to Home and if there was already a search query
		if (appContext.searchQuery?.length) {
			searchArticles(page);
		}
	}, [appContext.searchQuery]);

	const handleSearch = (query: string) => {
		appContext.setSearchQuery(query);
	};

	const handlePagination = (direction: string) => {
		switch(direction) {
			case PAGINATION_BWD:
				setPage(page - 1);
				break;
			default:
				setPage(page + 1);
				break;
		}
	};

	const renderUI = () => {
		switch(uiState) {
			case UI_STATE_LOADING:
				return (
					<div aria-label="Content Loader" className="contentLoader">
						<>
							{
								[1, 2, 3].map((elem) => (<ArticleItemLoader key={elem}/>))
							}
						</>
					</div>
				);
			case UI_STATE_EMPTY:
				return <Empty />;
			case UI_STATE_SUCCESS:
				return (
					<>
						<section aria-label="Search Results" className="searchResultsContainer">
							<label htmlFor="searchArticles">Results: { totalPages }</label>
							<ArticlesList id="searchArticles" articles={appContext.fetchArticlesResponse.response.docs} />
						</section>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div className="homePage">
			<SearchBar onSearch={handleSearch} />
			{ renderUI() }
			{ totalPages > 0 && <Pagination page={page} totalPages={totalPages} onPaginate={handlePagination}/> }
		</div>
	);
}

export default HomePage;
