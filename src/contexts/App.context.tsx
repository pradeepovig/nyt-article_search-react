import { useState, createContext } from 'react'
import {AppProps} from "../core/interfaces/app.interface";
import {FetchArticlesResponseProps} from "../core/interfaces/article.interface";
import FetchArticlesMock from "../tests/mocks/fetchArticles.mock";

// Ignore Unused parameter warning
const AppContext = createContext({
	fetchingArticles: false,
	fetchArticlesResponse: FetchArticlesMock,
	searchQuery: '',
	setFetchingArticles: (val: boolean) => {},
	setFetchArticlesResponse: (val: FetchArticlesResponseProps) => {},
	setSearchQuery: (val: string) => {}
});

const AppDataProvider = (props: AppProps) => {
	const setFetchingArticles = (fetchingArticles: boolean) => {
		setState({...state, fetchingArticles});
	}

	const setFetchArticlesResponse = (fetchArticlesResponse: FetchArticlesResponseProps) => {
		setState({...state, fetchArticlesResponse});
	};

	const setSearchQuery = (searchQuery: string) => {
		setState({...state, searchQuery});
	};

	// Value that will be given to the context, i.e state
	const [state, setState] = useState({
		fetchingArticles: false,
		fetchArticlesResponse: FetchArticlesMock,
		searchQuery: '',
		setFetchingArticles,
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
