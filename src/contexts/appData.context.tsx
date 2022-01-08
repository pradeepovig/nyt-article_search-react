import { useState, createContext } from 'react'
import {AppProps} from "../core/interfaces/app.interface";
import {FetchArticlesResponseProps} from "../core/interfaces/article.interface";
import FetchArticlesMock from "../tests/mocks/fetchArticles.mock";

const AppDataContext = createContext({
	fetchArticlesResponse: FetchArticlesMock,
	searchQuery: '',
	setFetchArticlesResponse: (data: FetchArticlesResponseProps) => {},
	setSearchQuery: (query:string) => {}
});

const AppDataProvider = (props: AppProps) => {
	const setFetchArticlesResponse = (data: FetchArticlesResponseProps) => {
		setState({...state, data})
	};

	const setSearchQuery = (searchQuery: string) => {
		setState({...state, searchQuery})
	};

	const [state, setState] = useState({
		fetchArticlesResponse: FetchArticlesMock,
		searchQuery: '',
		setFetchArticlesResponse,
		setSearchQuery,
	});

	return (
		<AppDataContext.Provider value={state}>
			{props.children}
		</AppDataContext.Provider>
	)
}

export { AppDataContext , AppDataProvider }
