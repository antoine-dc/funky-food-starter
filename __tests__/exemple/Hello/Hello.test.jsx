import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import { describe, expect, it } from "vitest";

describe("Hello", () => {
  it("Should display the correct first and last name", () => {
    render(<Hello firstName="Alice" lastName="Dupont" />);

    expect(screen.getByText("Hello Alice Dupont!")).toBeInTheDocument();
  });
});
