import React, {useCallback} from "react";
import SearchBar from "../../components/SearchBar";
import SearchAPIService from "../../services/API/SearchAPI.service";

const HomePage = (): JSX.Element => {
	const handleSearch = useCallback((query) => {
		SearchAPIService(query, page);
	}, []);

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<section aria-label="Search Results"></section>
		</>
	);
}

export default HomePage;
