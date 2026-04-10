import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Question from "./Question";
import { describe, expect, it, vi } from "vitest";
// import { fireEvent } from "@testing-library/react";

describe("QuestionBox", () => {
  it("should submit the question when Enter is pressed", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<Question onSubmit={onSubmit} />);

    const textarea = screen.getByPlaceholderText("Pose ta question...");

    await user.type(textarea, "Comment ça marche ?");
    await user.keyboard("{Enter}");

    // Avec le fireEvent
    // fireEvent.change(textarea, { target: { value: "Comment ça marche ?" } });
    // fireEvent.keyDown(textarea, { key: "Enter", code: "Enter" });

    expect(onSubmit).toHaveBeenCalledWith("Comment ça marche ?");
  });
});
