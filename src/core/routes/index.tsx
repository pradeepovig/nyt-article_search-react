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
					<Routes>
						{/* Note: Switch is now Routes in v6 */}
						{
							PUBLIC_ROUTES.map(
								({ path, key, component }: RouteProps): JSX.Element => <Route path={path} element={component} key={key} />
							)
						}
					</Routes>
				</Suspense>
			</MainLayout>
		</Router>
	);
}

export default RenderRoutes;
