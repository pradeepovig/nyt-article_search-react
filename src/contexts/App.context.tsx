import { useState, createContext } from 'react'
import {AppProps} from "../core/interfaces/app.interface";
import {FetchArticlesResponseProps} from "../core/interfaces/article.interface";
import FetchArticlesMock from "../tests/mocks/fetchArticles.mock";

// Ignore Unused parameter warning
const AppContext = createContext({
	fetchArticlesResponse: FetchArticlesMock,
	searchQuery: '',
	setFetchArticlesResponse: (fetchArticlesResponse: FetchArticlesResponseProps) => {},
	setSearchQuery: (searchQuery: string) => {}
});

const AppDataProvider = (props: AppProps) => {
	const setFetchArticlesResponse = (fetchArticlesResponse: FetchArticlesResponseProps) => {
		setState({...state, fetchArticlesResponse})
	};

	const setSearchQuery = (searchQuery: string) => {
		setState({...state, searchQuery})
	};

	// Value that will be given to the context, i.e state
	const [state, setState] = useState({
		fetchArticlesResponse: FetchArticlesMock,
		searchQuery: '',
		setFetchArticlesResponse,
		setSearchQuery,
	});

	return (
		<AppContext.Provider value={state}>
			{props.children}
		</AppContext.Provider>
	)
}

export { AppContext , AppDataProvider }
