// TODO: Add a comment giving a brief description of what React is
// import react so we can use it's funcitonality
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
//import this funcitonality from react
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// used to render a react element to the dom
//first argument is the component to render, second is container element on page
ReactDOM.render(<App />, document.getElementById('root'));
