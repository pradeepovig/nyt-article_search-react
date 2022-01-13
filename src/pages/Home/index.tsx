import React from "react";
import SearchBar from "../../components/SearchBar";
import {createSearchParams, useNavigate} from "react-router-dom";

const HomePage = (): JSX.Element => {
	let navigate = useNavigate();

	const handleSearch = (query: string) => {
		navigate({
			pathname: '/search',
			search: `?${createSearchParams({ query, page: '1' })}`,
		});
	};

	return (
		<div className="homePage">
			<SearchBar onSearch={handleSearch}/>
		</div>
	);
}

export default HomePage;
