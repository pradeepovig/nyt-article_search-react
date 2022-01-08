import React, { Suspense } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from "../../layouts/main";
import PUBLIC_ROUTES from "./public";
import {RouteProps} from "../interfaces/route.interface";

const RenderRoutes = (): React.ReactElement => {
	return (
		<Router>
			<MainLayout>
				<Suspense fallback="">
					{/* Note: Switch is now Routes in v6 */}
					{
						PUBLIC_ROUTES.map(
							({ path, key, exact, component }: RouteProps): JSX.Element =>
								exact ? ( <Route path={path} element={component} key={key} /> ) :
									( <Route path={path} element={component} key={key} /> )
						)
					}
				</Suspense>
			</MainLayout>
		</Router>
	);
}

export default RenderRoutes;
