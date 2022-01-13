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
	articlePath: string;
	setArticlesData: (val: FetchArticlesResponseTypes) => void;
	setArticlesPage: (val: number) => void;
	setSearchQuery: (val: string) => void;
	setArticleData: (val: ArticleTypes) => void;
	setArticlePath: (val: string) => void;
}

// Ignore Unused parameter warning
const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

const AppDataProvider = (props: AppTypes) => {
	const [articlesData, setArticlesData] = useState(FetchArticlesMock);
	const [articlesPage, setArticlesPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [articleData, setArticleData] = useState(ArticlesMock[0]);
	const [articlePath, setArticlePath] = useState("");

	return (
		// <AppContext.Provider value={state}>
		<AppContext.Provider value={{
			articlesData,
			articlesPage,
			searchQuery,
			articleData,
			articlePath,
			setArticlesData,
			setArticlesPage,
			setSearchQuery,
			setArticleData,
			setArticlePath
		}}>
			{props.children}
		</AppContext.Provider>
	);
};

export { AppContext, AppDataProvider };
