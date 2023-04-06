// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn){
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, title, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

//INHERITANCE MAKES YOUR CODE DRY - DONT REPEAT YOURSELF
//YOU DONT HAVE TO REPEAT CODE YOU WANT TO ADD TO NEXT CLASS


// TODO: Create a new object using the BlogPost class constructor.
  const post = new BlogPost(
    'Aub',
    'title',
    'text',
    'date'
  );
// TODO: Log both newly created BlogPost and Comment to the console.
const comment = new Comment(
  'AubNew',
  'new title',
  'new text',
  'newdate'
);

console.log(post);
console.log(comment);