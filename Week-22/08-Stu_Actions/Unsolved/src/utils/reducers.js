import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';
import createId from './createId';

// TODO: Add a comment explaining what a reducer is
// takes in full state and actions defined in actions.js
//  create reducer funciton with switch/case, each case being what action we want to be read my reducers
// add_student - takes a student object as payload with parameters
// - creates new ID for student based on current state student
// - pushes new student to the end of copy of student array
// - updates student array
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = createId(state.students);

      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          //keep everything that isn't selected stud.id
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // TODO: Add a comment describing how we get the student index
      // use findIndex method to take state.students, uses current student in funciton to take student+id making equal to actionpayloadid
      // return updated state obj with new student+id 
      // 
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // TODO: Add a comment describing what the spread operator is doing
      // adds that stuIndex onto current state/students as well as aciton payload
      // new updated student includes everything in state+studentsindex and all the data used to update is the action payload being included here

      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      const newStudentsList = [...state.students];

      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // returns full state with majors array(includes the state'smajors and actionpayload)
      // returns state obj with majors array that includes all data used to update major and the state of majors
      // action payload IS the updated version, it's the updated state of each method done in each action
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    case REMOVE_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // returns full state with majors array(curstate majors filtered to show all majors but chosen major(actionpayload(state index)))
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }
    default:
      return state;
  }
}
