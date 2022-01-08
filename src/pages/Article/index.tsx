import React from "react";
import SearchBar from "../../components/SearchBar";
import {Link} from "react-router-dom";
import {ArticleProps} from "../../core/interfaces/article.interface";

const ArticlePage = (props: ArticleProps): JSX.Element => {
	return (
		<>
			<Link to={"/"}>Go to results page</Link>
			<article>
				<h1 className="articleHeadline">{props.headline.print_headline}</h1>
				<i className="articleDate">{props.pub_date}</i>
				<p className=""> </p>
			</article>
		</>
	);
}

export default ArticlePage;
