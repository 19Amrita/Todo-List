import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo=()=>{
    const [inputList,setInputList]= useState("");
    const[Items,setItems]= useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
        return [...oldItems,inputList];
        });
        setInputList("");
    };
    const deleteItems = (id) => {
        console.log("del");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            });
        });
     };
    return(
        <>
        <div className="main_div">
            <div className="center_div">
            <br/>
            <h1> ToDo  List </h1>
            <br/>
            <input 
            type="text" 
            placeholder="add items" 
            value={inputList}
            onChange={itemEvent}/>
            
            <button onClick={listOfItems}>+</button>
                <ol>
                    {Items.map((itemsval,index)=>{
                      return (<TodoList key={index}
                      id={index}
                      text = {itemsval} 
                        onSelect={deleteItems}
                      />
                      );
                    })}
                </ol>
            </div>
        </div>
        </>
    )
}
export default Todo;