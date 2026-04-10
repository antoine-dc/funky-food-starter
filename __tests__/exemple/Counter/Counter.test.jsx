import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { describe, expect, it } from "vitest";

// Pour la méthode 2
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("Should increment the counter", async () => {
    render(<Counter />);

    const button = screen.getByText("Increment");

    // Méthode 1 : Utilisation de fireEvent
    // fireEvent.click(button);

    // ou Méthode 2 : Utilisation de userEvent pour simuler une interaction plus réaliste
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});
