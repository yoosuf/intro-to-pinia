import { add, subtract, multiply, divide } from './math';

describe('Math Utility Functions', () => {
  describe('add function', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add a positive and a negative number', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should add zero', () => {
      expect(add(10, 0)).toBe(10);
    });
  });

  describe('subtract function', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract when result is negative', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply function', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    it('should handle multiplication by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide function', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('should handle decimal results', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });
});
