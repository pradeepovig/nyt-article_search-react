import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleItem from "./index";
import ArticlesMock from "../../tests/mocks/articles.mock";

test("It should render an Article List Item", () => {
	render(<ArticleItem data={ArticlesMock[0]}/>);
	const label = screen.getByLabelText("Article List Item");
	expect(label).toBeInTheDocument();
});

test("It should render an Article List Item with a Headline", () => {
	render(<ArticleItem data={ArticlesMock[0]}/>);
	const headline = screen.getByLabelText("Article Headline");
	expect(headline).toBeInTheDocument();
});

test("It should render an Article List Item with a Published Date", () => {
	render(<ArticleItem data={ArticlesMock[0]}/>);
	const publishDate = screen.getByLabelText("Article Publish Date");
	expect(publishDate).toBeInTheDocument();
});
