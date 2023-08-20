import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import Login from '.';
import { splitVendorChunkPlugin } from 'vite';


describe("Login", () => {
    it("exists", () => {
      expect(Login).toBeDefined();
    });
    it("renders", () => {
      render(<Login />);
      expect(1 == 1).toBe(true);
    });

  });