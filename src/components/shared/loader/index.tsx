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
				<rect x="0" y="34" rx="3" ry="3" width="52" height="6" />
				<rect x="0" y="54" rx="3" ry="3" width="360" height="6" />
				<rect x="0" y="72" rx="3" ry="3" width="360" height="6" />
				<rect x="297" y="90" rx="3" ry="3" width="64" height="16" />
			</ContentLoader>
		</div>
	);
};

export default Loader;
