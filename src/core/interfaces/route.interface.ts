import React from "react";

export interface RouteTypes {
	path: string;
	children?: any;
	key?: string;
	element: React.ReactElement;
}

export interface SearchPageTypes {
	query: Record<string, string | undefined>;
	page: Record<string, string | undefined>;
}
