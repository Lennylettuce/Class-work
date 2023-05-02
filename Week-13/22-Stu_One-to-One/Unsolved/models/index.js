const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
    //onDelete option is set to 'CASCADE' - specify to delete rows in
      //child table when corresponding rows are deleted in the parent table
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
  //export new connection made here with the hasOne and belongsTo 
  //by exporting the new const made above
  //export new classes 
module.exports = { Reader, LibraryCard };
