import { useContext, memo } from "react";
import Pagination from "../Pagination";
import {AppContext} from "../../contexts/App.context";
import {ArticleProps} from "../../core/interfaces/article.interface";

const ArticlesList = ({ ...props }: ArticleProps[]): JSX.Element => {
	const appContext = useContext(AppContext);

	const ArticleContext = (article: ArticleProps) => {
		appContext.setFetchArticlesResponse(article);

		const resultsQuery =
			props.pages.page === "1"
				? props.title
				: `${props.title}/${props.pages.page}`;

		props.isGeneral
			? props.pages.page === "1"
				? appContext.setQuery("/")
				: appContext.setQuery(props.pages.page)
			: appContext.setQuery(resultsQuery);
	};

	// Pagination Data Logic
	const pageNum = parseFloat(props.pages.page);

	const PaginationData = {
		query: props.title,
		prev: isNaN(pageNum) ? 0 : pageNum - 1,
		next: isNaN(pageNum) ? 2 : pageNum + 1,
		isGeneralSearch: props.isGeneral,
	};

	const NumArticle = pageNum === 1 ? 1 : (pageNum - 1) * 10 + 1;
	const lastArticle = NumArticle + 9;

	// Check if the query results has been loaded ,if it is loaded then, if not show content placeholder

	return props.loaded ? (
		props.pages.articles > 0 || props.isGeneral ? (
			<>
				<div className="container padding-35 flex results">
					<h2>
						Results for: <p className="queryTitle">{props.title}</p>
					</h2>
					<p>
						{" "}
						showing {NumArticle} - {lastArticle} from {props.pages.articles} :
						(limit: 1000)
					</p>
					<Pagination data={PaginationData} />
				</div>
				<ul className="articleList container">
					<ArticleItem data={props.data} context={ArticleContext} />
				</ul>
			</>
		) : (
			<ErrorResults query={props.title} />
		)
	) : (
		<div className="container padding-35">
			{" "}
			<Loader />{" "}
		</div>
	);
};

export default memo(ArticlesList);
