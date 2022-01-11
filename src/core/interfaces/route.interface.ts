import React from "react";

export interface RouteProps {
	path: string,
	key: string,
	exact?: boolean,
	children?: any,
	component: React.ReactElement
}
