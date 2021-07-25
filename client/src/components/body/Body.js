import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../../actions/todos';
import './Body.css';

import Todos from './Todos';
function Body() {

    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const [todoData, setTodoData] = useState({title:''});
    const dispatch = useDispatch()
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(createTodo(todoData));

        setTodoData({title : ''});
    };
    return (
        <div className="body">
           <div className="body__head">
               <h2>My Day</h2>
               <p>{dayNames[d.getDay()]}, {monthNames[d.getMonth()]} {d.getDate()} </p>
           </div>
           <div className="body__input">
               <form onSubmit = {handleSubmit}>
                   <input type="text" value = {todoData.title} required placeholder="Add a todo..." onChange = {e => setTodoData({ ...todoData, title: e.target.value })}/>
               </form>
           </div>
           <Todos/>
        </div>
    )
}

export default Body
