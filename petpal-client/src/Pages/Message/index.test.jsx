import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Message from ".";

describe("Message", () => {
  it("exists", () => {
    expect(Message).toBeDefined();
  });
  it("renders", () => {
    render(<Message />);
    expect(1 == 1).toBe(true);
  });
});
