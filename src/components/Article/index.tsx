import {ArticleProps, ParamTypes} from "../../core/interfaces/article.interface";
import {useEffect, useState} from "react";
import ArticlesMock from "../../tests/mocks/articles.mock";

const Article = ({ title, cat, subcat, year, month, day }: ParamTypes): JSX.Element => {
	let [article, setArticle] = useState<ArticleProps>(ArticlesMock[0]);
	let [fetchingArticle, setFetchingArticle] = useState<boolean>(false);

	useEffect(() => {
		if (!article.web_url?.length) {
		}
	}, [article]);

	return (
		<article>
			<h1 className="articleHeadline">{article.headline.main}</h1>
			<i className="articleDate">{article.pub_date}</i>
		</article>
	);
}

export default Article;
