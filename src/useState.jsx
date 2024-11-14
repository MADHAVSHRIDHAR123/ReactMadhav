import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count, "initial value");
  console.log(count, "counttttt");

  const increament = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const reset = () => {
    
      setCount(0);
    
  };
  let styleCounter = {
    color: count > 5 ? "red" : "green",
  };
if(count === 0){
  styleCounter =  {
    color: 'yellow',
  };
}
 

  // if ( count > 5 ) {
  //     color = 'red'
  // }else{
  // color='green'

  // }
  return (
    <div>
      <h1 style={styleCounter}>Counter : {count}</h1>
      <button onClick={increament}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
