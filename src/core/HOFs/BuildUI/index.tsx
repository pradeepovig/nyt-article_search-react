/*
* A Higher Order Function to build UI from different states
* viz. Loading, Error, Not Found and Default/Success
* */

import React from "react";
import {UI_STATE_EMPTY, UI_STATE_ERROR, UI_STATE_LOADING, UI_STATE_SUCCESS} from "../../static/constants";

const BuildUI = (
	uiState: string,
	LoadingComponent: JSX.Element,
	SuccessComponent: JSX.Element,
	EmptyComponent: JSX.Element,
	ErrorComponent: JSX.Element,
	DefaultComponent?: JSX.Element
): JSX.Element => {
	const uiComponent = () => {
		switch(uiState) {
			case UI_STATE_LOADING:
				return LoadingComponent;
			case UI_STATE_SUCCESS:
				return SuccessComponent;
			case UI_STATE_EMPTY:
				return EmptyComponent;
			case UI_STATE_ERROR:
				return ErrorComponent;
			default:
				return ( DefaultComponent || <></> );
		}
	};

	return uiComponent();
}

export default BuildUI;
