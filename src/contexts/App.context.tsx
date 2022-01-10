import { useState, createContext } from 'react'
import {AppProps} from "../core/interfaces/app.interface";
import {ArticleProps, FetchArticlesResponseProps} from "../core/interfaces/article.interface";
import FetchArticlesMock from "../tests/mocks/fetchArticles.mock";
import ArticlesMock from "../tests/mocks/articles.mock";

// Ignore Unused parameter warning
const AppContext = createContext({
	fetchingArticles: false,
	fetchArticlesResponse: FetchArticlesMock,
	searchQuery: '',
	article: ArticlesMock[0],
	articleURL: '',
	setFetchingArticles: (val: boolean) => {},
	setFetchArticlesResponse: (val: FetchArticlesResponseProps) => {},
	setSearchQuery: (val: string) => {},
	setArticle: (val: ArticleProps) => {},
	setArticleURL: (val: string) => {}
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

	const setArticle = (article: ArticleProps) => {
		setState({...state, article});
	};

	const setArticleURL = (articleURL: string) => {
		setState({...state, articleURL});
	};

	// Value that will be given to the context, i.e state
	const [state, setState] = useState({
		fetchingArticles: false,
		fetchArticlesResponse: FetchArticlesMock,
		searchQuery: '',
		article: ArticlesMock[0],
		articleURL: '',
		setFetchingArticles,
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

export { AppContext , AppDataProvider }
