import React, { useState } from 'react'
import FormContainer from './FormContainer'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    let [formData,setFormData]=useState({
        items:[], // to store multi set of data
        course:"", // to store course
        trainer:"", // to store trainer
        id:uuidv4()
    })

    let handleChange=(event)=>{
        console.log(event);
        let {name,value}=event.target;
        setFormData({...formData,[name]:value})
    }
    // function to update set of items
    let handleEdit=(editId)=>{
        console.log("id of the item to edit",editId);

        // collecting all remaining values apart from the value to be updated
        let remainingItems=formData.items.filter((val)=>{
            return val.id!==editId;
        })

        // finding specific item to update
        let editItem=formData.items.find((val)=>{
            return val.id===editId;
        })
        console.log("item to edit ",editItem);
        console.log("remaining items",remainingItems);
        setFormData({
            items:remainingItems, // remaining values
            course:editItem.course, // bringing course to update in course input
            trainer:editItem.trainer, // bringing trainer to update in trainer input
            id:editItem.id
        })
        
    }
    // function to delete set of items
    let handleDelete=(delId)=>{
        console.log("id of item to delete",delId);
        let filterval=formData.items.filter((val)=>{
            console.log("current val in filter",val);//obj
            return val.id!==delId // if id current val is not matching to id of item to del, the item will be removed

            
        })
        setFormData({...formData,items: filterval});
    }
    //event ===sbe
    let handleSubmit=(event)=>{
        event.preventDefault()
        // to pass the data into array
        setFormData({
            items:[
                ...formData.items, // prevent over riding inside array
                {
                    course:formData.course,
                    trainer:formData.trainer,
                    id:formData.id,
                }
            ],
            course:"",//setting course back to empty to  colllect new data
            trainer:"", // setting trainer back to empty to collect new data
            id:uuidv4() // to generate  new id for next data
        })
    }
  return (
    <>
        <section id='mainContainer'>
            <FormContainer handleSubmit={handleSubmit} 
                course={formData.course}
                trainer={formData.trainer}
                handleChange={handleChange}
            />
            <TodoList items={formData.items} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </section>
    </>
  )
}

export default App
// uuid generate a random id
// install -- npm install uuid