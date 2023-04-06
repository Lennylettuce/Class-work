// TODO: Add a comment describing what kind of function this is
  //this is a constructor function that is an object that has prototype property(all do) and can hold key/value pairs AND functions
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
  //.prototype adds to the object once it's been declaired, here it's adding a funciton and pushing the comments array into the function(comment)
BlogPost.prototype.addComent = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComent('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
  //logs BlogPost.function(comment) it pushes comments array into function(here) and takes the info in addComment and puts that into that array
console.log(post.comments);
