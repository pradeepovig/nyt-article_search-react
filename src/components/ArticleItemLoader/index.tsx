import ContentLoader from "react-content-loader";
import React from "react";

const ArticleItemLoader = (): JSX.Element => {
	return (
		<ContentLoader
			speed={2}
			gradientRatio={0.2}
			viewBox="0 0 800 120"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="34" rx="3" ry="3" width="72" height="12" />
			<rect x="0" y="60" rx="3" ry="3" width="800" height="24" />
			<rect x="0" y="98" rx="3" ry="3" width="800" height="24" />
		</ContentLoader>
	);
};

export default ArticleItemLoader;
