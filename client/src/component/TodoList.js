import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodos=(todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos =[todo,...todos]
        setTodos(newTodos);
        console.log(todo,...todos)
    }
    const completeTodo = id=>{
        let updateTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)
    }
    const removeTodo=(id)=>{
        const removeArr = [...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr) 
    }
    const upadateTodo = (todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue:item)))
    }
  return (
    <div>
        <h1>Todos</h1>
        <TodoForm onSubmit={addTodos}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList