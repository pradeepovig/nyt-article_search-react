import React from "react";
import { memo } from "react";
import ArticleItem from "../ArticleItem";
import { ArticleTypes } from "../../core/interfaces/article.interface";

interface ArticlesListTypes {
	articles: ArticleTypes[]
	id?: string
}

const ArticlesList = (props: ArticlesListTypes): JSX.Element => {
	return(
		<ul className="articlesList">
			{
				props.articles.map((articleItem: ArticleTypes) => (<ArticleItem key={articleItem.web_url} data={articleItem} />))
			}
		</ul>
	);
};

export default memo(ArticlesList);
