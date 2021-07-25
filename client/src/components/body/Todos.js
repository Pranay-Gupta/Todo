import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
function Todos() {
    const todos = useSelector(state => state.todos)
    return (         
        <div className="todos">
           { todos.map((todo) => (
                <Todo key = {todo._id} todo = {todo} title={todo.title}/>
            ))} 
    </div>
    )
}

export default Todos
