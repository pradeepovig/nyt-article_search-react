import { lazy } from "react";

// Lazy loading imports
const Home = lazy(() => import("./pages/Home"));
const Article = lazy(() => import("./pages/Article"));
const Error404 = lazy(() => import("./pages/Error404"));

const PUBLIC_ROUTES = [
	{
		path: '/',
		key: 'HOME',
		exact: true,
		component: <Home />
	},
	{
		path: '/article',
		key: 'ARTICLE',
		exact: true,
		component: <Article />
	},
	{ path: "*", component: <Error404 />, exact: true, key: 'OTHER' }
];

export default PUBLIC_ROUTES;
