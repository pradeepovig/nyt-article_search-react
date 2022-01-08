import React, {useCallback} from "react";
import SearchBar from "../../components/SearchBar";

const HomePage = (): JSX.Element => {
	const handleSearch = useCallback(() => {
		// Fetch Articles Here
	}, []);

	return (
		<>
			<SearchBar onSearch={handleSearch} />
		</>
	);
}

export default HomePage;
