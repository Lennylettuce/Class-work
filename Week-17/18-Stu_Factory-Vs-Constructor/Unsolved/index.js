// TODO: Refactor the class to a factory function.
const Lesson = (title, description) => {
  const state = {
    title: 'CS for JS',
    description: 'Module 17 - Computer Science',
  };

  return { ...houseInfo(state.title, state.description)};
}

const houseInfo = state => {
  return {
  information: () => console.log(state),
  }
}

const csForJS = Lesson();
csForJS.information();
