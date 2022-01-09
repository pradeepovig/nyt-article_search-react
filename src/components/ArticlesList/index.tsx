import { memo } from "react";
import ArticleItem from "../ArticleItem";
import {ArticleProps} from "../../core/interfaces/article.interface";

interface ArticlesListProps {
	articles: ArticleProps[]
	id?: string
}

const ArticlesList = (props: ArticlesListProps): JSX.Element => {
	return(
		<ul className="articlesList">
			{
				props.articles.map((articleItem: ArticleProps) => (<ArticleItem key={articleItem.pub_date} data={articleItem} />))
			}
		</ul>
	);
};

export default memo(ArticlesList);
