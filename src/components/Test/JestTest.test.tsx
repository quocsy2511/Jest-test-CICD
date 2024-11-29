import JestTest from "./JestTest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("JestTest", () => {
  it("should be render text JestTest ", () => {
    render(<JestTest />);
    expect(screen.getByText("JestTest")).toBeInTheDocument();
  });
});
