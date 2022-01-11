import { useState, createContext } from 'react'
import {AppProps} from "../core/interfaces/app.interface";
import {ArticleProps, FetchArticlesResponseProps} from "../core/interfaces/article.interface";
import FetchArticlesMock from "../tests/mocks/fetchArticles.mock";
import ArticlesMock from "../tests/mocks/articles.mock";

interface AppContextProps {
	fetchArticlesResponse: FetchArticlesResponseProps;
	searchQuery: string;
	article: ArticleProps;
	articleURL: string;
	setFetchArticlesResponse: (val: FetchArticlesResponseProps) => void;
	setSearchQuery: (val: string) => void;
	setArticle: (val: ArticleProps) => void;
	setArticleURL: (val: string) => void;
}

// Ignore Unused parameter warning
const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppDataProvider = (props: AppProps) => {
	const setFetchArticlesResponse = (fetchArticlesResponse: FetchArticlesResponseProps) => {
		setState({...state, fetchArticlesResponse});
	};

	const setSearchQuery = (searchQuery: string) => {
		setState({...state, searchQuery});
	};

	const setArticle = (article: ArticleProps) => {
		setState({...state, article});
	};

	const setArticleURL = (articleURL: string) => {
		setState({...state, articleURL});
	};

	// Value that will be given to the context, i.e state
	const [state, setState] = useState({
		fetchArticlesResponse: FetchArticlesMock,
		searchQuery: '',
		article: ArticlesMock[0],
		articleURL: '',
		setFetchArticlesResponse,
		setSearchQuery,
		setArticle,
		setArticleURL
	});

	return (
		<AppContext.Provider value={state}>
			{props.children}
		</AppContext.Provider>
	)
}

export { AppContext, AppDataProvider }
