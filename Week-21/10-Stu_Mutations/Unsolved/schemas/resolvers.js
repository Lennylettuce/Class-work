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
    class: async (parent, args) => {
      return await Class.findById(args.id);
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  },
  Mutation: {
    addSchool: async (parent, { name, location, studentCount }) => {
      return await School.create({ name, location, studentCount });
    },
    updateClass: async (parent, { id, building }) => {
      //need to add the new:true from MONGO/MONGOOSE check docs again!
      return await Class.findOneAndUpdate({ _id: id }, { building }, { new: true });
    }
  }
};

module.exports = resolvers;
