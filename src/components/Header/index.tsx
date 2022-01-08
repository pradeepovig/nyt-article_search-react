import { Link } from "react-router-dom";

export default function Header(): JSX.Element{
	return (
		<header className="flex justifyContentCenter alignItemsCenter">
			<Link to={"/"}>
				<img src="/logo.svg" alt="NYT Logo" />
			</Link>

			<h1>"The New York Times" article search application</h1>
		</header>
	);
}
