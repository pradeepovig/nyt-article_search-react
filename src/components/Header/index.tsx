import React from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element{
	return (
		<header className="flex justifyContentSpaceBetween alignItemsCenter">
			<Link to={"/"} className="brandLogo" aria-label="Application Brand Logo / Link to Home">
				<img src="/logo.svg" alt="NYT Logo" />
			</Link>

			<h1 className="headerTitle" aria-label="Application Title">{ "The New York Times" } article search application</h1>

			<div className="placeholder" />
		</header>
	);
}
