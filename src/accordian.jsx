import { useState } from "react";
import React  from "react";
import data from "./data";
import './App.css'

export default function Accordian (){
const [selected, setSelected]= useState(null)
const [enableMutiselection, setEnableMutiselection] = useState(false)
const [multiple, setmulitple] = useState([])
// const data = []
// function handlesingleSelection(currentId) {
//     setSelected(currentId=== selected ? null)
// }
console.log(data, "daataaa")
    return(

       <div className="acc-wrapper">
        <button onClick={()=> setEnableMutiselection(!enableMutiselection)}>EnableMutiselection</button>
        <div className="accordian">
            {
                data?.map((dataiItem) => (
                    <div className="item">
                        <div  className="title">
                        <h3>{dataiItem.question}</h3>
                        <span>+</span>
                        </div>
                        </div>
                )
            )}
    
        </div>
        </div>
        )
}