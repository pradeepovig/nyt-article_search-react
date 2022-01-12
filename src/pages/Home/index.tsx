import React, {useContext, useState} from "react";
import SearchBar from "../../components/SearchBar";
import {AppContext} from "../../contexts/App.context";
import {
	PAGINATION_BWD, UI_STATE_SUCCESS
} from "../../core/static/constants";
import Pagination from "../../components/Pagination";
import ArticlesList from "../../components/ArticlesList";
import Empty from "../../components/shared/Empty";
import SearchArticlesLoader from "../../components/SearchArticlesLoader";
import Error from "../../components/shared/Error";
import BuildUI from "../../core/HOFs/BuildUI";
import useSearchArticles from "../../core/hooks/useSearchArticles";

const HomePage = (): JSX.Element => {
	const appContext = useContext(AppContext);
	const [query, setQuery] = useState(appContext.searchQuery);
	const [page, setPage] = useState(appContext.articlesPage);

	// Fetch Article data
	let [ uiState, articlesData, totalPages ] = useSearchArticles(query, page);

	const handleSearch = (query: string) => {
		appContext.setSearchQuery(query);
		setQuery(query);

		// Reset total pages and page
		setPage(0);
	};

	const handlePagination = (direction: string) => {
		let newPage = page;

		switch(direction) {
			case PAGINATION_BWD:
				newPage -= 1;
				break;
			// The only other direction is Forward
			default:
				newPage += 1;
				break;
		}

		appContext.setArticlesPage(newPage);
		setPage(newPage);
	};

	const MainComponent = (
		<>
			<section aria-label="Search Results" className="searchResultsContainer">
				{ <label htmlFor="searchArticles">Results: { totalPages }</label> }
				<ArticlesList id="searchArticles" articles={articlesData?.response?.docs || []} />
			</section>
		</>
	);

	const PaginationComponent = totalPages > 0 && uiState === UI_STATE_SUCCESS && <Pagination page={page} totalPages={totalPages} onPaginate={handlePagination}/>;

	return (
		<div className="homePage">
			<SearchBar cachedQuery={query} onSearch={handleSearch}/>
			{ BuildUI(uiState, <SearchArticlesLoader />, MainComponent, <Empty />, <Error />) }
			{ PaginationComponent }
		</div>
	);
}

export default HomePage;
