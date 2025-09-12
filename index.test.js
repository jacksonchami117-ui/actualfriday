const { isFriday, getExcitementLevel } = require('./index');

describe('Friday Functions', () => {
  describe('isFriday', () => {
    test('should return true for Friday', () => {
      expect(isFriday('Friday')).toBe(true);
      expect(isFriday('friday')).toBe(true);
      expect(isFriday('FRIDAY')).toBe(true);
    });

    test('should return false for other days', () => {
      expect(isFriday('Monday')).toBe(false);
      expect(isFriday('Tuesday')).toBe(false);
      expect(isFriday('Wednesday')).toBe(false);
      expect(isFriday('Thursday')).toBe(false);
      expect(isFriday('Saturday')).toBe(false);
      expect(isFriday('Sunday')).toBe(false);
    });
  });

  describe('getExcitementLevel', () => {
    test('should return celebration message for Friday', () => {
      const result = getExcitementLevel('Friday');
      expect(result).toContain('It\'s Friday!');
      expect(result).toContain('🎉');
    });

    test('should return waiting message for other days', () => {
      const result = getExcitementLevel('Monday');
      expect(result).toContain('It\'s Monday');
      expect(result).toContain('Still waiting for Friday');
    });
  });
});