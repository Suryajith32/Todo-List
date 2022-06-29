import React, {useState} from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
const [todos,setTodos] = useState([])

const addTodos = todo =>{
   if(!todo.text ||/^s*$/.test(todo.text)) {
   return;
}

const newTodos =[todo, ...todos];
    setTodos(newTodos);
   
    
};
   const completeTodo = id => {
    let updateTodos =todos.map(todo =>{
      if(todo.id === id){
        todo.isComplete =!todo.iscomplete
      }
      return todo
    })
    setTodos(updateTodos);
   }
   const removeTodo = id => {
    const removeArr =[...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
   }
   


  return (
    <div>
        <h1>ToDo App</h1>
        <TodoForm onSubmit={addTodos}/>
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo ={removeTodo}
        />
        
    </div>
  )
}

export default TodoList