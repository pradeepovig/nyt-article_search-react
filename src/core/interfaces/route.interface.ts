import React from "react";

export interface RouteProps {
	path: string,
	children?: any,
	key?: string,
	element: React.ReactElement
}
