import { useState, createContext } from 'react'
import {AppTypes} from "../core/interfaces/app.interface";
import {ArticleTypes, FetchArticlesResponseTypes} from "../core/interfaces/article.interface";
import FetchArticlesMock from "../tests/mocks/fetchArticles.mock";
import ArticlesMock from "../tests/mocks/articles.mock";

interface AppContextTypes {
	fetchArticlesResponse: FetchArticlesResponseTypes;
	searchQuery: string;
	article: ArticleTypes;
	articleURL: string;
	setFetchArticlesResponse: (val: FetchArticlesResponseTypes) => void;
	setSearchQuery: (val: string) => void;
	setArticle: (val: ArticleTypes) => void;
	setArticleURL: (val: string) => void;
}

// Ignore Unused parameter warning
const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

const AppDataProvider = (props: AppTypes) => {
	const setFetchArticlesResponse = (fetchArticlesResponse: FetchArticlesResponseTypes) => {
		setState({...state, fetchArticlesResponse});
	};

	const setSearchQuery = (searchQuery: string) => {
		setState({...state, searchQuery});
	};

	const setArticle = (article: ArticleTypes) => {
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
