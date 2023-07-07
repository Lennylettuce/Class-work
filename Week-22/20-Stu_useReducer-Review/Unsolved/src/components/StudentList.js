import React, { useReducer, useState } from 'react';

import { ADD_STUDENT, REMOVE_STUDENT, ADD_MAJOR } from '../utils/actions';

import reducer from '../utils/reducers';

import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  const initialState = useStudentContext();

  //update global state variable, takes in initial statobj and the reducer to be used
  const [state, dispatch] = useReducer(reducer, initialState);

  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentMajor, setNewStudentMajor] = useState('');

  // TODO: Add a comment explaining what this state variable will be used for after reviewing it's use in the app
  // update local state obj with new major name var and the function that does the work to update and setting useState to accept this variable
  // use in payload, new property of this obj
  const [newMajorName, setNewMajorName] = useState('');

  return (
    <div>
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          console.log('🚀 StudentList.js: Dispatched remove!');
                          // TODO: Add a comment explaining the functionality of the REMOVE_STUDENT action when it hits the reducer
                          // the dispath function to allow update (global?)state has params of type and payload, type being the action and payload being the data to be accessed/altered
                          return dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {/* //TODO: Add a commenting explaining what will happen if a major is added to the "Majors" array */}
                {/* // updates the global state to include the new major, reloads page to include*/}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              {console.log(state.majors)}
              <button
                type="button"
                onClick={() => {
                  console.log('🚀 StudentList.js: Dispatched add student! ');
                  return dispatch({
                    type: ADD_STUDENT,
                    payload: { name: newStudentName, major: newStudentMajor },
                  });
                }}
              >
                Add Student
              </button>
            </div>
            <h3>Add a New Major</h3>
            <div className="add-major">
              {/* //TODO: Does the setNewMajorName method affect local state or global state the way it is used in this onChange event */}
              {/* // local state set with that function, provided by useState hook, only effects the newMajorName */}
              <input
                value={newMajorName}
                onChange={(e) => setNewMajorName(e.target.value)}
                placeholder="New major name..."
                type="text"
                style={{ padding: '10px', marginRight: '5px' }}
              />

              <button
                type="button"
                onClick={() => {
                  console.log('🚀 StudentList.js: Dispatched add major! ');
                  // TODO: Explain what happens when the ADD_MAJOR action is dispatched to the reducer with a new major
                  // takes existing state and add this onto current list of majors
                  return dispatch({
                    type: ADD_MAJOR,
                    payload: newMajorName,
                  });
                }}
              >
                Add Major
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
