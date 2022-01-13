import React from "react";
import SearchBar from "../../components/SearchBar";
import { createSearchParams, useNavigate } from "react-router-dom";
import { setDocumentTitle } from "../../core/utils";

const HomePage = (): JSX.Element => {
	setDocumentTitle("The New York Times | Home");

	let navigate = useNavigate();

	const handleSearch = (query: string) => {
		navigate({
			pathname: "/search",
			search: `?${createSearchParams({ query, page: "1" })}`,
		});
	};

	return (
		<div className="homePage">
			<SearchBar onSearch={handleSearch}/>
		</div>
	);
};

export default HomePage;
