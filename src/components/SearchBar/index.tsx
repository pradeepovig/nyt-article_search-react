import React, {useContext, useState} from "react";
import { FunctionComponent } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import {AppContext} from "../../contexts/App.context";

type SearchBarProps = {
	onSearch: Function
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ onSearch }): JSX.Element => {
	const appContext = useContext(AppContext);
	const [searchQuery, setSearchQuery] = useState(appContext.searchQuery);

	const handleSearch = (key: string) => {
		if (key === "Enter") {
			onSearch(searchQuery);
		}
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.currentTarget.value);
	};

	return (
		<div className="searchBar container alignCenter">
			<label>Type search query term in here:</label>
			<div className="searchBarWrapper">
				<input
					type="text"
					name="search"
					value={searchQuery}
					onChange={handleInput}
					onKeyDown={({ key }) => handleSearch(key)}
					placeholder="e.g: New York Weather, Superbowl"
				/>
				<SearchIcon className="searchIcon"/>
			</div>
		</div>
	);
}

export default SearchBar;
