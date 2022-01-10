import React, {useContext, useEffect, useState} from "react";
import {Link, Navigate, useParams} from "react-router-dom";
import Article from "../../components/Article";
import {AppContext} from "../../contexts/App.context";
import {isValidURL, setDocumentTitle} from "../../core/utils";
import ArticleAPIService from "../../services/API/ArticleAPI.service";
import {
	UI_STATE_DEFAULT,
	UI_STATE_EMPTY,
	UI_STATE_ERROR,
	UI_STATE_LOADING,
	UI_STATE_SUCCESS
} from "../../core/static/constants";
import Empty from "../../components/shared/Empty";
import ContentLoader from "react-content-loader";

const ArticlePage = (): JSX.Element => {
	let { title, cat, subcat, year, month, day } = useParams<Record<string, string | undefined>>();
	const articleURL = title ?
		`${year}/${month}/${day}/${cat}/${subcat}/${title}` :
		`${year}/${month}/${day}/${cat}/${subcat}`;

	const appContext = useContext(AppContext);
	let [uiState, setUIState] = useState(UI_STATE_DEFAULT);

	useEffect(() => {
		setUIState(UI_STATE_LOADING);

		// If there isn't any saved article or the URL is different from the current one
		if (!appContext.article || articleURL !== appContext.articleURL) {
			//	Fetch article here
			ArticleAPIService(articleURL).then(res => {
				if (res.status) {
					appContext.setArticle(res.data.response.docs[0]);
				} else {
					setUIState(UI_STATE_ERROR);
				}
			}).catch(e => {
				console.error(e);
				setUIState(UI_STATE_ERROR);
			});
		}

		setDocumentTitle(appContext.article.headline.main || appContext.article.headline.main);
	}, []);

	const renderUI = () => {
		switch(uiState) {
			case UI_STATE_LOADING:
				return (
					<div aria-label="Content Loader">
						<ContentLoader
							speed={2}
							width={740}
							gradientRatio={0.2}
							height={1024}
							viewBox="0 0 470 1024"
							backgroundColor="#f3f3f3"
							foregroundColor="#ecebeb"
						>
							<rect x="0" y="34" rx="3" ry="3" width="360" height="18" />
							<rect x="0" y="64" rx="3" ry="3" width="36" height="6" />
							<rect x="0" y="84" rx="3" ry="3" width="360" height="6" />
							<rect x="0" y="96" rx="3" ry="3" width="360" height="6" />
							<rect x="0" y="108" rx="3" ry="3" width="360" height="6" />
							<rect x="0" y="128" rx="3" ry="3" width="36" height="6" />
						</ContentLoader>
					</div>
				);
			case UI_STATE_EMPTY:
				return <Empty />;
			case UI_STATE_SUCCESS:
				return (
					<>
						<Link to={"/"}>Go to results page</Link>
						<Article data={appContext.article}/>
						<a className="button" aria-label="Read full story" href={appContext.article.web_url}>Read full story</a>
					</>
				);
			default:
				return <></>;
		}
	};

	return (
		isValidURL(articleURL) ? renderUI() : <Navigate to="/404" />
	);
}

export default ArticlePage;
