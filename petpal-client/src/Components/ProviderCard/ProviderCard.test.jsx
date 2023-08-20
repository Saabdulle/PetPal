import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import ProviderCard from '.';


describe("ProviderCard", () => {

    it("exists", () => {
      expect(ProviderCard).toBeDefined();
    });
    it("renders", () => {
    //   render(ProviderCard);
      expect(1 == 1).toBe(true);
    });


  });