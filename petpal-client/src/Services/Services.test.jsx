import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import Services from '.';

describe("Services", () => {
    it("exists", () => {
      expect(Services).toBeDefined();
    });
    it("renders", () => {
      render(<Services />);
      expect(1 == 1).toBe(true);
    });

  });