const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
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
      return await Professor.find({}).populate('classes');
    },
// TODO: Add a new resolver for a single Class object
    class: async (parent, args) => {
      return await Class.findById(args.id).populate('professor');
    }
  }
};

module.exports = resolvers;
