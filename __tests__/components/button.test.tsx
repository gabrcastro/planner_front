import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import { ButtonComponent } from "../../src/components/button/button.component";

describe("Button Component", () => {
  it("renders a button with the primary variant and correct class", () => {
    render(<ButtonComponent>Ok</ButtonComponent>);
    const button = screen.getByText("Ok");
    expect(button).toHaveClass("bg-primary");
  });

  it("background primary is correct", () => {
    render(<ButtonComponent variant="primary">Ok</ButtonComponent>);
    const button = screen.getByText("Ok");
    expect(button).toHaveClass("bg-primary")
  });

  it("background secondary is correct", () => {
    render(<ButtonComponent variant="secondary">Ok</ButtonComponent>);
    const button = screen.getByText("Ok");
    expect(button).toHaveClass("bg-zinc-800")
  });

  it("renders a button with the full size", () => {
    render(<ButtonComponent size="full">Ok</ButtonComponent>);
    const button = screen.getByText("Ok");
    expect(button).toHaveClass("h-11"); // Adjust the assertion based on your expected full size class
  });

  it("renders a disabled button", () => {
    render(<ButtonComponent disabled>Ok</ButtonComponent>);
    const button = screen.getByText("Ok");
    expect(button).toBeDisabled();
  });
});
