/*
* Loader to be displayed while searching for articles
* */

import ArticleItemLoader from "../ArticleItemLoader";
import React from "react";

const SearchArticlesLoader = (): JSX.Element => {
	return (
		<div aria-label="Content Loader" className="contentLoader">
			<>
				{
					[1, 2, 3].map((elem) => (<ArticleItemLoader key={elem}/>))
				}
			</>
		</div>
	);
};

export default SearchArticlesLoader;
