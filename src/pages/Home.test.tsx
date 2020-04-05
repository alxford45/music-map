import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./Home";

test("Home Component", () => {
  it("renders without error", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
