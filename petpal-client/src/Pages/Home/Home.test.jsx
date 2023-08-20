import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import Home from '.';

describe("Home", () => {
    it("exists", () => {
      expect(Home).toBeDefined();
    });
    it("renders", () => {
      render(<Home />);
      expect(1 == 1).toBe(true);
    });

  });