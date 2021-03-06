import React from "react";
import { ReactComponent as EmptySVG } from "../../../assets/icons/no-results.svg";

interface EmptyTypes {
	msg?: string;
	note?: string;
}

const Empty = ({ msg, note }: EmptyTypes): JSX.Element => {
	return (
		<div className="uiState empty">
			<EmptySVG />
			<h1 className="uiStateMessage">{msg || "No results found"}</h1>
			<p className="uiStateNote">{ note || "Uh oh! Looks like we don't have any articles for that search query." }</p>
		</div>
	);
};

export default Empty;
