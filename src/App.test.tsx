import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App Component", () => {
  it("renders without error", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
