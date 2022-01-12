import React, {useState} from "react";
import { FunctionComponent } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

type SearchBarTypes = {
	cachedQuery: string;
	onSearch: (val: string) => void;
}

const SearchBar: FunctionComponent<SearchBarTypes> = ({ cachedQuery, onSearch }: SearchBarTypes): JSX.Element => {
	const [searchQuery, setSearchQuery] = useState(cachedQuery);

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
