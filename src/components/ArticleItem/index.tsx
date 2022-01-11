import {ArticleProps} from "../../core/interfaces/article.interface";
import {Link} from "react-router-dom";
import {getArticlePageURL} from "../../core/utils";

interface ArticleItemProps {
	data: ArticleProps,
	key?: string
}

const ArticleItem = ({ data }: ArticleItemProps): JSX.Element => {
	return (
		<article className="articleListItem">
			{/*<Link to={`/article/${getArticlePageURL(data.web_url)}`}>*/}
			<Link to={getArticlePageURL(data.web_url)}>
				<i className="articleDate">{ data.pub_date }</i>
				<h1 className="articleHeadline">{ data.headline.main }</h1>
				{ data.headline.print_headline ? ( <h4 className="articleSubHeadline">{ data.headline.print_headline }</h4> ) : null }
			</Link>
		</article>
	);
}

export default ArticleItem;
