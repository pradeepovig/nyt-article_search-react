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
import ContentLoader from "react-content-loader";

const HomePage = (): JSX.Element => {
	const [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const appContext = useContext(AppContext);

	const searchArticles = (query: string, page: number) => {
		appContext.setFetchingArticles(true);
		appContext.setSearchQuery(query);
		let pages = 0;

		SearchAPIService(query, page).then(({status, data}) => {
			if(status) {
				appContext.setFetchArticlesResponse(data);

				if (data.response.docs.length) {
					setUIState(UI_STATE_SUCCESS);
				} else {
					setUIState(UI_STATE_EMPTY);
				}

				pages = data.response.meta.hits ? ( Math.floor(data.response.meta.hits / 10) ) + ( data.response.meta.hits % 10 ) : 0;
			} else {
				setUIState(UI_STATE_ERROR);
			}

			console.log(page);
			setTotalPages(pages);
		});
	};

	useEffect(() => {
		if (appContext.searchQuery?.length) {
			searchArticles(appContext.searchQuery, page);
		}
	}, []);

	const handleSearch = (query: string) => {
		searchArticles(query, 0);
	};

	const handlePagination = (direction: string) => {
		const currPage = ( appContext.fetchArticlesResponse.response.meta.offset / 10 ) - 1;

		switch(direction) {
			case PAGINATION_BWD:
				if (currPage > page) {
					setPage(page - 1);
					searchArticles(appContext.searchQuery, page);
				}
				break;
			default:
				if (currPage < page) {
					setPage(page - 1);
					searchArticles(appContext.searchQuery, page);
				}
				break;
		}

	};

	const renderUI = () => {
		switch(uiState) {
			case UI_STATE_LOADING:
				return (
					<div aria-label="Content Loader">
						<ContentLoader
							speed={2}
							width={740}
							gradientRatio={0.2}
							height={784}
							viewBox="0 0 740 784"
							backgroundColor="#f3f3f3"
							foregroundColor="#ecebeb"
						>
							<rect x="0" y="34" rx="3" ry="3" width="52" height="6" />
							<rect x="0" y="54" rx="3" ry="3" width="360" height="6" />
							<rect x="0" y="72" rx="3" ry="3" width="360" height="6" />
							<rect x="297" y="90" rx="3" ry="3" width="64" height="16" />
						</ContentLoader>
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
						<Pagination page={page} totalPages={totalPages} onPaginate={handlePagination}/>
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
		</div>
	);
}

export default HomePage;
