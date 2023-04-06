// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
    function BlogPost(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.printMetaData = function () {
            //can also use ${this.authorName} - template literal instead of this way
            console.log('Created by' + authorName + 'on' + createdOn);
        };
    }
// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor
    const post = new BlogPost('Aub', 'Coding 101', 'here is some text', 'created on 4/5/23');
// TODO: Call the 'printMetaData()' method on the new object
    post.printMetaData();