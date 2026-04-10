import { useState } from "react";

export default function Question({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <textarea
      placeholder="Pose ta question..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
