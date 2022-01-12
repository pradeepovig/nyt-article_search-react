import React from "react";

export interface RouteTypes {
	path: string,
	children?: any,
	key?: string,
	element: React.ReactElement
}
