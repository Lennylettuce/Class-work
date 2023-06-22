import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
  // dry code export(default) for funciton Counter()
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
    // useState hooks hold the value of the state variable
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
    //this click handler increments count by one/click
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
    //this click handler decrements count by one/click
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody
                  This will return the Cardbody w/display functionality */}
        
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
