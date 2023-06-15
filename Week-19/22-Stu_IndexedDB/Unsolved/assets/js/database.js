import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
  // creates the database, name it and version it

  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
      // upgrade is function to add code to database
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
        // this creates the store which house's the database and it's objects, here it's named, given a keypath-id and autoinc'd 
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
