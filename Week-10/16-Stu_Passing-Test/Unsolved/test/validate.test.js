const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe('password length', () => {
    it('should return false if password less than 8', () => {
      const validate = new Validate();
      const result = validate.isPassword('pass');
      expect(result).toBe(false);
    });
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  describe('password uppercase', () => {
    it('should return false when password has no uppercase', () => {
      const validate = new Validate();
      const result = validate.isPassword('password123');
      expect(result).toBe(false);
    });
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  describe('password lowercase', () => {
    it('should return false when password has no lowercase', () => {
      const validate = new Validate();
      const result = validate.isPassword('PASSWORD123');
      expect(result).toBe(false);
    });
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  describe('password numbers', () => {
    it('should return false when the password has no numbers', () => {
      const validate = new Validate();
      const result = validate.isPassword('password');
      expect(result).toBe(false);
    });
  });
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  describe('password pass', () => {
    it('should return true when password is at least 8 char, has upper, lower and number', () => {
      const validate = new Validate();
      const result = validate.isPassword('Passwwrd123');
      expect(result).toBe(true);
    });
  });
});
