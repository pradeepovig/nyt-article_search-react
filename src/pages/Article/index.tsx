import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Article from "../../components/Article";
import { AppContext } from "../../contexts/App.context";
import { isValidPath } from "../../core/utils";
import ArticlePageLoader from "../../components/ArticlePageLoader";
import useFetchArticle from "../../core/hooks/useFetchArticle";
import BuildUI from "../../core/HOFs/BuildUI";

const ArticlePage = (): JSX.Element => {
	const appContext = useContext(AppContext);

	// Get Article path from the browser
	const params = useParams<Record<string, string | undefined>>();
	const currentArticlePath = params["*"] || "";

	// Fetch Article data
	const [ uiState, articleData ] = useFetchArticle(currentArticlePath);

	// Main component
	const MainComponent = (
		isValidPath(currentArticlePath) ?
			<>
				<Link to={`/search?query=${appContext.searchQuery}&page=${appContext.articlesPage}`}>{"<"} Go back to results page</Link>
				<Article data={articleData}/>
				<a className="button" aria-label="Read full story" href={articleData?.web_url}>Read full story</a>
			</> :
			<>
				<h1>No Article Found</h1>
				<p>Please check the URL.</p>
			</>
	);

	return (
		<div className="articlePage">
			{
				BuildUI(uiState, <ArticlePageLoader />, MainComponent)
			}
		</div>
	);
};

export default ArticlePage;
