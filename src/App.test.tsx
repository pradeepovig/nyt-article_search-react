import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("It should render Main Layout", () => {
  render(<App />);
  const header = screen.getByLabelText("Header");
  const main = screen.getByLabelText("Main");
  expect(header).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});
