import React from 'react';

// TODO: Add a comment explaining what is being passed to this "child" component as props
  //cardbody accepts props (from child el Counter, the changes to that useState are the props(3 things in counter function)) arg 

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
