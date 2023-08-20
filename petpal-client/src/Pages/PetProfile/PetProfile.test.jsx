import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import PetProfile from '.';

describe("PetProfile", () => {
    it("exists", () => {
      expect(PetProfile).toBeDefined();
    });
    it("renders", () => {
      render(<PetProfile />);
      expect(1 == 1).toBe(true);
    });

  });