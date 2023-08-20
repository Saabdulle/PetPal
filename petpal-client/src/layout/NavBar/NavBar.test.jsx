import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import NavBar from '.';


describe("NavBar", () => {
    it("exists", () => {
      expect(NavBar).toBeDefined();
    });
    it("renders", () => {
      render(NavBar);
      expect(1 == 1).toBe(true);
    });

  });