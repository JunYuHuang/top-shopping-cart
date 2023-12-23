import { describe, it, expect, vi } from "vitest"; // optional imports
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Shop from "../shop.jsx";
import { dummyCards } from "../../lib/dummyCards.js";

describe("Shop route component", () => {
  it("renders the heading text", () => {
    const mockProps = {
      products: dummyCards,
      incrementCartItemCount: vi.fn(),
    };
    render(<Shop {...mockProps} />);
    expect(screen.getByRole("heading").textContent).toMatch(/all products/i);
  });

  it("does nothing if parent container clicked", async () => {
    const user = userEvent.setup();
    const mockProps = {
      products: dummyCards,
      incrementCartItemCount: vi.fn(),
    };
    render(<Shop {...mockProps} />);
    const containerDiv = screen.getByTestId("products-container");
    await user.click(containerDiv);
    expect(mockProps.incrementCartItemCount).not.toHaveBeenCalled();
  });
});
