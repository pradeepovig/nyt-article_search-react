import React from "react";
import { render, screen } from "@testing-library/react";
import ArticlesMock from "../../tests/mocks/articles.mock";
import Article from "./index";

test("It should render an Article", () => {
	render(<Article data={ArticlesMock[0]}/>);
	const label = screen.getByLabelText("Article");
	expect(label).toBeInTheDocument();
});

test("It should render an Article with a Headline", () => {
	render(<Article data={ArticlesMock[0]}/>);
	const headline = screen.getByLabelText("Article Headline");
	expect(headline).toBeInTheDocument();
});

test("It should render an Article with a Published Date", () => {
	render(<Article data={ArticlesMock[0]}/>);
	const publishDate = screen.getByLabelText("Article Publish Date");
	expect(publishDate).toBeInTheDocument();
});
