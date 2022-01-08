import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "core/config/routes";
import RouteInterface from "core/interfaces/route.interface";
import MainLayout from "../../../layouts/main";

const AppRoutes = (): React.ReactElement => {
	return (
		<Router>
			<MainLayout>
				<Suspense fallback="">
					<Switch>{RouterComponents}</Switch>
				</Suspense>
			</MainLayout>
		</Router>
	);
};

const RouterComponents = ROUTES.map(
	({ url, component, isExact }: RouteInterface, key): JSX.Element =>
		isExact ? (
			<Route exact path={url} render={() => component} key={key} />
		) : (
			<Route path={url} render={() => component} key={key} />
		)
);

export default AppRoutes;
