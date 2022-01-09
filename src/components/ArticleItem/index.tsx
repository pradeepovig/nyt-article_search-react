import {ArticleProps} from "../../core/interfaces/article.interface";

interface ArticleItemProps {
	data: ArticleProps,
	key?: string
}

const ArticleItem = ({ data }: ArticleItemProps): JSX.Element => {
	return (
		<article className="articleCondensed">
			<i className="articleDate">{ data.pub_date }</i>
			<div>
				<h1 className="articleHeadline">{ data.headline.main }</h1>
				<h3 className="articleSubHeadline">{ data.headline.print_headline }</h3>
			</div>
			<button className="articleReadButton">Read Full Article</button>
		</article>
	);
}

export default ArticleItem;
