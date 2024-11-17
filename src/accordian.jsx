import { useEffect, useState } from "react";
import React  from "react";
// import data from "./data";
import './App.css'

export default function Accordian (){
const [selected, setSelected]= useState(null)
const [enableMutiselection, setEnableMutiselection] = useState(false)
const [multiple, setmulitple] = useState([])
const [data, setdata] = useState([])
// const data = []
function handlesingleSelection(currentId) {
    setSelected(currentId=== selected  ? null: currentId)
}

function handleMultpleSelection(currentId){
    const coyArray = [...multiple]
    const findSelectedinDex = multiple.indexOf(currentId)

    

    if(findSelectedinDex !== -1){
     coyArray.splice(findSelectedinDex,1)
        
    }else{
        coyArray.push(currentId)
    }
    setmulitple(coyArray)
    console.log(coyArray,enableMutiselection, "daataaa")
}

    async function fetchData (){
       const data =  await fetch("https://jsonplaceholder.typicode.com/posts")


       setdata(await data.json())
     }

useEffect(()=>{
    fetchData();
},[])

    return(

       <div className="acc-wrapper">
        <button onClick={()=> setEnableMutiselection(!enableMutiselection)}>EnableMutiselection</button>
        <div className="accordian">
            {
                data?.map((dataiItem) => (
                    <div className="item">

                        <div  className="title" onClick={enableMutiselection?()=>handleMultpleSelection(dataiItem.id):()=>handlesingleSelection(dataiItem.id)}>
                        <h3>{dataiItem.title}</h3>
                        <span>+</span>
                        </div>
                        <div>
                            {enableMutiselection? (multiple.indexOf(dataiItem.id) !== -1 && (<div>{dataiItem.body}</div>)):
                            (selected === dataiItem.id && (<div>{dataiItem.body}</div>))}
                            </div>
                        </div>     
                        
                )
            )}
    
        </div>
        </div>
        )
}