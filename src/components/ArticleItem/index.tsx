import React from "react";
import { ArticleTypes } from "../../core/interfaces/article.interface";
import { Link } from "react-router-dom";
import { formatDate, getArticlePageURL } from "../../core/utils";

interface ArticleItemTypes {
	data: ArticleTypes,
	key?: string
}

const ArticleItem = ({ data }: ArticleItemTypes): JSX.Element => {
	return (
		<article className="articleListItem" aria-label="Article List Item">
			<Link to={`/article/${getArticlePageURL(data.web_url)}`} >
				<i className="articleDate" aria-label="Article Publish Date">{ formatDate(data.pub_date, "") }</i>
				<h1 className="articleHeadline" aria-label="Article Headline">{ data.headline.main }</h1>
				{ data.headline.print_headline ? ( <h4 className="articleSubHeadline" aria-label="Article Print Headline">{ data.headline.print_headline }</h4> ) : null }
			</Link>
		</article>
	);
};

export default ArticleItem;
