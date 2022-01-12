import { useState, createContext } from 'react'
import {AppTypes} from "../core/interfaces/app.interface";
import {ArticleTypes, FetchArticlesResponseTypes} from "../core/interfaces/article.interface";
import FetchArticlesMock from "../tests/mocks/fetchArticles.mock";
import ArticlesMock from "../tests/mocks/articles.mock";

interface AppContextTypes {
	articlesData: FetchArticlesResponseTypes;
	articlesPage: number,
	searchQuery: string;
	articleData: ArticleTypes;
	articleURL: string;
	setArticlesData: (val: FetchArticlesResponseTypes) => void;
	setArticlesPage: (val: number) => void;
	setSearchQuery: (val: string) => void;
	setArticleData: (val: ArticleTypes) => void;
	setArticleURL: (val: string) => void;
}

// Ignore Unused parameter warning
const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

const AppDataProvider = (props: AppTypes) => {
	const [articlesData, setArticlesData] = useState(FetchArticlesMock);
	const [articlesPage, setArticlesPage] = useState(0);
	const [searchQuery, setSearchQuery] = useState('');
	const [articleData, setArticleData] = useState(ArticlesMock[0]);
	const [articleURL, setArticleURL] = useState('');

	// const setArticlesData = (articlesData: FetchArticlesResponseTypes) => {
	// 	setState({...state, articlesData});
	// };
	//
	// const setArticlesPage = (articlesPage: number) => {
	// 	setState({...state, articlesPage});
	// };
	//
	// const setSearchQuery = (searchQuery: string) => {
	// 	setState({...state, searchQuery});
	// };
	//
	// const setArticleData = (articleData: ArticleTypes) => {
	// 	setState({...state, articleData});
	// };
	//
	// const setArticleURL = (articleURL: string) => {
	// 	setState({...state, articleURL});
	// };

	// Value that will be given to the context, i.e state
	// const [state, setState] = useState({
	// 	articlesData: FetchArticlesMock,
	// 	articlesPage: 0,
	// 	searchQuery: '',
	// 	articleData: ArticlesMock[0],
	// 	articleURL: '',
	// 	setArticlesData,
	// 	setArticlesPage,
	// 	setSearchQuery,
	// 	setArticleData,
	// 	setArticleURL
	// });

	return (
		// <AppContext.Provider value={state}>
		<AppContext.Provider value={{
			articlesData,
			articlesPage,
			searchQuery,
			articleData,
			articleURL,
			setArticlesData,
			setArticlesPage,
			setSearchQuery,
			setArticleData,
			setArticleURL
		}}>
			{props.children}
		</AppContext.Provider>
	)
}

export { AppContext, AppDataProvider }
