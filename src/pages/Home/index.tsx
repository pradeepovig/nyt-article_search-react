import React, {useContext, useState} from "react";
import SearchBar from "../../components/SearchBar";
import SearchAPIService from "../../services/API/SearchAPI.service";
import {AppContext} from "../../contexts/App.context";
import {
	PAGINATION_BWD,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../../core/static/constants";
import Loader from "../../components/shared/loader";
import Pagination from "../../components/Pagination";
import ArticlesList from "../../components/ArticlesList";
import Empty from "../../components/shared/empty";

const HomePage = (): JSX.Element => {
	const [uiState, setUIState] = useState('DEFAULT');
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

				pages = data.response.meta.hits ? ( data.response.meta.hits / 10 ) + ( data.response.meta.hits % 10 ) : 0;
			} else {
				setUIState(UI_STATE_ERROR);
			}

			setTotalPages(pages);
		});
	};

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
				return <Loader />;
			case UI_STATE_EMPTY:
				return <Empty />;
			case UI_STATE_SUCCESS:
				return (
					<>
						<section aria-label="Search Results">
							<label htmlFor="searchArticles">Results: { totalPages }</label>
							<ArticlesList id="searchArticles" articles={appContext.fetchArticlesResponse.response.docs} />
						</section>
						<Pagination prev={false} next={false} onPaginate={handlePagination}/>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			{ renderUI() }
		</>
	);
}

export default HomePage;
