import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import PetProfileForm from '.';


describe("PetProfileForm", () => {

    it("exists", () => {
      expect(PetProfileForm).toBeDefined();
    });
    it("renders", () => {
      render(PetProfileForm);
      expect(1 == 1).toBe(true);
    });

  });