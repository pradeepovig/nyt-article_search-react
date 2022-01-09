import React from "react";
import {Link, useParams} from "react-router-dom";
import Article from "../../components/Article";

const ArticlePage = (): JSX.Element => {
	let { title, cat, subcat, year, month, day } = useParams();
	const articleURL = title ?
		`${year}/${month}/${day}/${cat}/${subcat}/${title}` :
		`${year}/${month}/${day}/${cat}/${subcat}`;

	return (
		<>
			<Link to={"/"}>Go to results page</Link>
			{/*<Article title={title} cat={cat} subcat={subcat} year={year} month={month} day={day}/>*/}
		</>
	);
}

export default ArticlePage;
