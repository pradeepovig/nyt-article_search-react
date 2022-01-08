import React from "react";

export interface RouteProps {
	path: string,
	key: string,
	exact?: boolean,
	component: React.ReactElement
}
