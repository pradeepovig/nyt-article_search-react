import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Article from "../../components/Article";
import {AppContext} from "../../contexts/App.context";
import {isValidPath, setDocumentTitle} from "../../core/utils";
import ArticleAPIService from "../../services/API/ArticleAPI.service";
import {
	UI_STATE_DEFAULT,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../../core/static/constants";
import Empty from "../../components/shared/Empty";
import ArticlePageLoader from "../../components/ArticlePageLoader";
import {ArticleTypes} from "../../core/interfaces/article.interface";
import useFetchArticle from "../../core/hooks/useFetchArticle";

const ArticlePage = (): JSX.Element => {
	const appContext = useContext(AppContext);

	// let [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	let params = useParams<Record<string, string | undefined>>();

	// Get Article path from the browser
	const articlePath = params['*'] || '';

	// Fetch Article data
	const [ uiState, articleData ] = useFetchArticle(articlePath, appContext.article, appContext.articleURL);

	// useEffect(() => {
	// 	let article: ArticleTypes = {} as ArticleTypes;
	// 	setUIState(UI_STATE_LOADING);
	//
	// 	// If there isn't any saved article or the URL is different from the current one
	// 	if (!appContext.article || articleURL !== appContext.articleURL) {
	// 		//	Fetch article here
	// 		ArticleAPIService(articleURL).then(({status, data}) => {
	// 			if (status) {
	// 				if (data.response.docs.length) {
	// 					article = data.response.docs[0];
	// 					appContext.setArticle(article);
	// 					appContext.setArticleURL(articleURL);
	// 					setUIState(UI_STATE_SUCCESS);
	// 				} else {
	// 					setUIState(UI_STATE_EMPTY);
	// 				}
	// 			} else {
	// 				setUIState(UI_STATE_ERROR);
	// 			}
	// 		}).catch(e => {
	// 			console.error(e);
	// 			setUIState(UI_STATE_ERROR);
	// 		});
	// 	} else {
	// 		setUIState(UI_STATE_SUCCESS);
	// 	}
	//
	// 	setDocumentTitle(article.headline?.main || article.headline?.print_headline || 'NYT');
	// }, []);

	const renderUI = () => {
		switch(uiState) {
			case UI_STATE_LOADING:
				return <ArticlePageLoader />;
			case UI_STATE_EMPTY:
				return <Empty />;
			case UI_STATE_SUCCESS:
				return (
					isValidPath(articlePath) ?
						(
							<>
								<Link to={"/"}>Go to results page</Link>
								<Article data={articleData}/>
								<a className="button" aria-label="Read full story" href={appContext.article?.web_url}>Read full story</a>
							</>
						) :
						<>
							<h1>No Article Found</h1>
							<p>Please check the URL.</p>
						</>
				);
			default:
				return <></>;
		}
	};

	return (
		<div className="articlePage">
			{
				renderUI()
			}
		</div>
	);
}

export default ArticlePage;
