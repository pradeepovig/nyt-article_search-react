import React from "react";
import { useState, createContext } from "react";
import { AppTypes } from "../core/interfaces/app.interface";
import { ArticleTypes, FetchArticlesResponseTypes } from "../core/interfaces/article.interface";
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
	const [articlesPage, setArticlesPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [articleData, setArticleData] = useState(ArticlesMock[0]);
	const [articleURL, setArticleURL] = useState("");

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
	);
};

export { AppContext, AppDataProvider };
