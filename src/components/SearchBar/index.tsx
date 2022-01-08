import { useRef } from "react";
import { FunctionComponent } from "react";

type SearchBarProps = {
    onSearch: Function
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ onSearch }) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSearch = async (key: string) => {
    if (key === "Enter") {
        onSearch();
    }
  };

  const SearchBar = () => {
    return (
      <div className="searchBar container alignCenter">
        <label>Type search query term in here:</label>
        <input
          type="text"
          ref={inputEl}
          onKeyDown={({ key }) => handleSearch(key)}
          placeholder="e.g: New York Weather, Superbowl"
        />
      </div>
    );
  };

  return <SearchBar />;
}

export default SearchBar;
