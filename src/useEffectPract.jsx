import React, {useState, useEffect} from "react";


 const UseEffectComponent = ()=>{
const [count , setCount] = useState(0)
const [ text, setText ] = useState(12)
  

const increament = () => setCount(prev => prev+1)
const increamentText = () => setText(prev => prev+1)
  

    useEffect(() => {
        // this will run once the component will mount
        console.log("Only for First time")

    },[]);
    useEffect(() => {

        console.log("on every state change")
     // this will run at every rerender
    });
    useEffect(() => {
     // this will run once this state changes or redender
     console.log("on count  state change")
    },[count]);

    return (

<div>
      <h1 >Counter : {count}</h1>
      <button onClick={increament}>Increment</button>
      <button onClick={increamentText}>Increment text</button>
      
    </div>

    )

}


export default  UseEffectComponent ;

