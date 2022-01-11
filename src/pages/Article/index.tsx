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
	const appContext = useContext(AppContext);
	let [uiState, setUIState] = useState(UI_STATE_DEFAULT);
	let { title, cat, subcat, year, month, day } = useParams<Record<string, string | undefined>>();
	const articleURL = title ?
		`${year}/${month}/${day}/${cat}/${subcat}/${title}` :
		`${year}/${month}/${day}/${cat}/${subcat}`;

	useEffect(() => {
		setUIState(UI_STATE_LOADING);

		// If there isn't any saved article or the URL is different from the current one
		if (!appContext.article || articleURL !== appContext.articleURL) {
			//	Fetch article here
			ArticleAPIService(articleURL).then(res => {
				if (res.status) {
					appContext.setArticle(res.data.response.docs[0]);
					setUIState(UI_STATE_SUCCESS);
				} else {
					setUIState(UI_STATE_ERROR);
				}
			}).catch(e => {
				console.error(e);
				setUIState(UI_STATE_ERROR);
			});
		}

		setDocumentTitle(appContext.article?.headline.main || appContext.article?.headline.print_headline || 'NYT');
	}, []);

	const renderUI = () => {
		switch(uiState) {
			case UI_STATE_LOADING:
				return (
					<div aria-label="Content Loader" className="contentLoader">
						<ContentLoader
							speed={2}
							gradientRatio={0.2}
							viewBox="0 0 800 600"
							backgroundColor="#f3f3f3"
							foregroundColor="#ecebeb"
						>
							<rect x="0" y="34" rx="3" ry="3" width="36" height="6" />
							<rect x="0" y="46" rx="3" ry="3" width="800" height="18" />
							<rect x="0" y="76" rx="3" ry="3" width="36" height="6" />
							<rect x="0" y="96" rx="3" ry="3" width="800" height="6" />
							<rect x="0" y="114" rx="3" ry="3" width="800" height="6" />
							<rect x="0" y="132" rx="3" ry="3" width="800" height="6" />
							<rect x="0" y="150" rx="3" ry="3" width="36" height="6" />
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
						<a className="button" aria-label="Read full story" href={appContext.article?.web_url}>Read full story</a>
					</>
				);
			default:
				return <></>;
		}
	};

	return (
		<div className="articlePage">
			{
				// isValidURL(articleURL) ? renderUI() : <Navigate to="/404" />
				renderUI()
			}
		</div>
	);
}

export default ArticlePage;
