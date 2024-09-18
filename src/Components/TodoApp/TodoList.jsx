import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom'
import './Todo.css'



const TodoList = () => {
    const [todos,setTodos] = useState([]);
    
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos)
    }
    
    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text))
            {
                return;
            }
        setTodos((prev)=>
            prev.map((item) => (item.id === todoId ? newValue : item)))    
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }
    const completeTodo = id =>{
        let updateTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;

            }
            return todo
        })
        setTodos(updateTodos)
    }
  return (
    <>
        <h1 className="icon"><Link className="Home-icon fs-2" to={'/Home'}><MdHome /></Link></h1>
        <div className='todo-app'>
        <h1> What's the plan Today</h1>
        <TodoForm onSubmit = {addTodo} />
        <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo} />
    </div>
    </>
    
  )
}

export default TodoList