import ContentLoader from "react-content-loader";
import React from "react";

const ArticlePageLoader = (): JSX.Element => {
	return (
		<div aria-label="Content Loader" className="contentLoader">
			<ContentLoader
				speed={2}
				gradientRatio={0.2}
				viewBox="0 0 800 600"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="34" rx="3" ry="3" width="36" height="6" />
				<rect x="0" y="46" rx="3" ry="3" width="800" height="18" />
				<rect x="0" y="76" rx="3" ry="3" width="36" height="6" />
				<rect x="0" y="96" rx="3" ry="3" width="800" height="6" />
				<rect x="0" y="114" rx="3" ry="3" width="800" height="6" />
				<rect x="0" y="132" rx="3" ry="3" width="800" height="6" />
				<rect x="0" y="150" rx="3" ry="3" width="36" height="6" />
			</ContentLoader>
		</div>
	);
}

export default ArticlePageLoader;
