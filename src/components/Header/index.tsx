import { Link } from "react-router-dom";

export default function Header(): JSX.Element{
	return (
		<header className="flex justifyContentSpaceBetween alignItemsCenter">
			<Link to={"/"} className="brandLogo">
				<img src="/logo.svg" alt="NYT Logo" />
			</Link>

			<h1 className="headerTitle">"The New York Times" article search application</h1>

			<div className="blocker" />
		</header>
	);
}
