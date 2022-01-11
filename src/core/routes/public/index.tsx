import { lazy } from "react";

// Lazy loading imports
// @ts-ignore
const Home = lazy(() => import("../../../pages/Home"));
// @ts-ignore
const Article = lazy(() => import("../../../pages/Article"));
// @ts-ignore
const Error404 = lazy(() => import("../../../pages/Error404"));

const PUBLIC_ROUTES = [
	{
		path: '/',
		key: 'HOME',
		component: <Home />
	},
	{
		path: '/:year/:month/:day/:cat/:subcat/:title?',
		key: 'ARTICLE',
		component: <Article />
	},
	{
		path: '*',
		component: <Error404 />,
		key: 'OTHER'
	}
];

export default PUBLIC_ROUTES;
