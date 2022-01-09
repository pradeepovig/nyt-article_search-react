import ContentLoader from "react-content-loader";

const Loader = () => {
	return (
		<div aria-label="Content Loader">
			<ContentLoader
				speed={2}
				width={740}
				gradientRatio={0.2}
				height={784}
				viewBox="0 0 740 784"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="3" ry="3" width="140" height="20" />
				<rect x="0" y="40" rx="3" ry="3" width="740" height="20" />
				<rect x="0" y="100" rx="3" ry="3" width="140" height="20" />
				<rect x="0" y="140" rx="3" ry="3" width="700" height="20" />
				<rect x="0" y="200" rx="3" ry="3" width="140" height="20" />
				<rect x="0" y="240" rx="3" ry="3" width="680" height="20" />
			</ContentLoader>
		</div>
	);
};

export default Loader;
