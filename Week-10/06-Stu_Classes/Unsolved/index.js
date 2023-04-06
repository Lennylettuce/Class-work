// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
    class BlogPost {
        constructor(authorName, title, text, createdOn) {
            this.authorName = authorName;
            this.title = title;
            this.text = text;
            this.createdOn = createdOn;
            this.comments = [];
        }
        
        printMetaData() {
            console.log('Created by' + authorName + 'on' + createdOn);
        }

        addComment(comment) {
            this.comments.push(comment);
        }
        
    }

    class Comment {
        constructor(authorName, text, createdOn, reaction){
            this.authorName = authorName;
            this. text = text;
            this. createdOn = createdOn;
            this.reaction = reaction;
        }

        printMetaData() {
            console.log('Created by' + ${this.authorName} + 'on' + ${this.createdOn});
        }
    }

    const post = new BlogPost(
        'Aub',
        'blogpost title',
        'text for post',
        '4/5/23'
    );

    const comment = new Comment(
        'New Name',
        'new Blog title',
        'new text',
        'new date'
    )

    post.addComment(comment);

    post.printMetaData();
    post.printMetaData();
// TODO:DONE Give BlogPost a property called 'comments' that is set to an empty array.

// TODO:DONE Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
