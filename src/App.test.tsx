import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRouter } from "./tests/utils";

test("It should render Home Page on default route", () => {
  renderWithRouter(<App />);

  // Verify that Home Page is loaded
  const homePageNode = screen.getByLabelText("Home Page");
  expect(homePageNode).toBeInTheDocument();
});

test("It should render Error 404 page on bad route", () => {
  renderWithRouter(<App />, { route: "/a-bad-route" });

  // Verify that Error404 Page is loaded
  const errorPageNode = screen.getByLabelText("Error Page");
  expect(errorPageNode).toBeInTheDocument();
});
