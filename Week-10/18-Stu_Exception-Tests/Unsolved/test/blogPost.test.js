const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('authorName length', () => {
    it('should throw err when length is less than 2 char long', () => {
      const wrapper = () => new BlogPost('B');
      const err = new Error ('should throw err when length is less than 2 char long');
      expect(wrapper).toThrowError(err);
    });
  });
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  describe('authorName chars', () => {
    it('should throw err when authorName doesnt have all the chars etc', () => {
      const wrapper = () => new BlogPost();
      const err = new Error ('should throw err when authorName doesnt have all the chars etc');
      expect(wrapper).toThrowError(err);
    });
  });
});
