import React from "react";
import { Logo } from "./Logo";
import { render } from "@testing-library/react";

describe("Test Logo React Component", () => {
  it("should have a XS Logo from Material Icons", () => {
    const { getByTestId } = render(<Logo size="xs" />);
    const i = getByTestId("Logo");

    expect(i).toHaveClass("xs");
  });
});
