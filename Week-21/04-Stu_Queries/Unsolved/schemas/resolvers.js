const { School, Class, Professor } = require('../models');

const resolvers = {
  Query:
  // * Every school's name, location, and student body count

  //* Every class's name

  //* Every professor's name
   {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    professors: async () => {
      return await Professor.find({});
    }
  },

  //* Every class's name, credit hours, and building number

  //* Every professor's name and student review score
   
//  * Every class's name, credit hours, and building number

// * Every professor's name and student review score
  
// * Every professor's ID, name, student review score, office hours, and office building number
  
};

module.exports = resolvers;
