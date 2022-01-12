import { lazy } from "react";

// Lazy loading imports
// @ts-ignore
const Home = lazy(() => import("../../../pages/Home"));
// @ts-ignore
const Article = lazy(() => import("../../../pages/Article"));
// @ts-ignore
const Error404 = lazy(() => import("../../../pages/Error404"));

// Custom hook for
const PUBLIC_ROUTES = [
	{
		path: '/',
		key: 'HOME',
		element: <Home />
	},
	{
		path: '/article/*',
		key: 'ARTICLE',
		element: <Article />
	},
	{
		path: '*',
		key: 'OTHERPATH',
		element: <Error404 />
	}
];

export default PUBLIC_ROUTES;
