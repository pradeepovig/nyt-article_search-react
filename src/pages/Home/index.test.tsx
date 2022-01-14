import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./index";

test("It should render Home Page", () => {
	render(<HomePage />);
	const homePageNode = screen.getByLabelText("Home Page");
	expect(homePageNode).toBeInTheDocument();
});
