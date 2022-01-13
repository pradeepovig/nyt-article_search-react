import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
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
import { createSearchParams, Navigate, useSearchParams } from "react-router-dom";

interface SearchPageComponentTypes {
	query: string;
	page: number;
}

const SearchPageComponent = ({ query, page }: SearchPageComponentTypes): JSX.Element => {
	const [, setSearchParams] = useSearchParams();
	const [ searchQuery, setSearchQuery ] = useState(query);
	const [ searchPage, setSearchPage ] = useState(page);

	// Fetch Article data
	let [ uiState, articlesData, totalPages ] = useSearchArticles(searchQuery, searchPage);

	const handleSearch = (searchQuery: string) => {
		setSearchQuery(searchQuery);
		setSearchPage(1);
		setSearchParams(createSearchParams({ query: searchQuery, page: "1" }));
	};

	const handlePagination = (direction: string) => {
		let newPage = searchPage;

		switch(direction) {
			case PAGINATION_BWD:
				newPage -= 1;
				break;
			// The only other direction is Forward
			default:
				newPage += 1;
				break;
		}

		setSearchPage(newPage);
		setSearchParams(createSearchParams({ query: searchQuery, page: newPage.toString() }));
	};

	const MainComponent = (
		<>
			<section aria-label="Search Results" className="searchResultsContainer">
				{ <label htmlFor="searchArticles">Results: { articlesData?.response?.meta.hits || 0 }</label> }
				<ArticlesList id="searchArticles" articles={articlesData?.response?.docs || []} />
			</section>
		</>
	);

	const PaginationComponent = totalPages > 0 && uiState === UI_STATE_SUCCESS && <Pagination page={page} totalPages={totalPages} onPaginate={handlePagination}/>;

	return (
		<div className="searchPage">
			<SearchBar cachedQuery={searchQuery} onSearch={handleSearch}/>
			{ BuildUI(uiState, <SearchArticlesLoader />, MainComponent, <Empty />, <Error />) }
			{ PaginationComponent }
		</div>
	);
};

const SearchPage = (): JSX.Element => {
	// Get route params
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	const page = searchParams.get("page");

	return (
		(query && page && Number(page)) ?
		<SearchPageComponent query={query} page={Number(page)} /> :
		<Navigate to="/" />
	);
};

export default SearchPage;
