import {ArticleTypes} from "../../core/interfaces/article.interface";
import {formatDate} from "../../core/utils";

interface ArticleComponentTypes {
	data: ArticleTypes
}

const Article = (props: ArticleComponentTypes): JSX.Element => {
	return (
		<article>
			<h1 className="articleHeadline">{props.data.headline.main}</h1>
			<i className="articleDate">{formatDate(props.data.pub_date, '')}</i>
			<p className="articleParagraph">{props.data.lead_paragraph}</p>
		</article>
	);
}

export default Article;
