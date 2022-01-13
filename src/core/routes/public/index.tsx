import { lazy } from "react";

// Lazy loading imports
const Home = lazy(() => import("../../../pages/Home"));
const Search = lazy(() => import("../../../pages/Search"));
const Article = lazy(() => import("../../../pages/Article"));
const Error404 = lazy(() => import("../../../pages/Error404"));

// Custom hook for
const PUBLIC_ROUTES = [
	{
		path: '/',
		key: 'HOME',
		element: <Home />
	},
	{
		path: "/search/*",
		key: 'SEARCH',
		element: <Search />,
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
