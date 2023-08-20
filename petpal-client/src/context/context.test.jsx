import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import context from '.';

describe("context", () => {
    it("exists", () => {
      expect(context).toBeDefined();
    });


  });