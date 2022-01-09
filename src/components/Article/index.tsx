import {ArticleProps} from "../../core/interfaces/article.interface";

const Article = (props: ArticleProps): JSX.Element => {
	return (
		<article className="articleCondensed">
			<i className="articleDate">{ props.pub_date }</i>
			<div>
				<h1 className="articleHeadline">{ props.headline.main }</h1>
				<h3 className="articleSubHeadline">{ props.headline.print_headline }</h3>
			</div>
			<button className="articleReadButton">Read Full Article</button>
		</article>
	);
}

export default Article;
