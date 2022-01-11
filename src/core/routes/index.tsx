import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from "../../layouts/main";
import {RouteProps} from "../interfaces/route.interface";
import PUBLIC_ROUTES from "./public";

const RenderRoutes = (): React.ReactElement => {
	return (
		<Router>
			<MainLayout>
				<Suspense fallback="">
					<Routes>
						{/* Note: Switch is now Routes in v6 */}
						{
							PUBLIC_ROUTES.map(
								({ path, element, key }: RouteProps): JSX.Element => <Route path={path} element={element} key={key}/>
							)
						}
					</Routes>
				</Suspense>
			</MainLayout>
		</Router>
	);
}

export default RenderRoutes;
