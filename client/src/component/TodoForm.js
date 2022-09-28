import React, { useState } from 'react'
const TodoForm=(props)=>{
    const [input,setInput]=useState('');
    const changeHandler=(e)=>{
        setInput(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random()* 1000),
            text:input
        })
        setInput('')
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Add Todo' onChange={changeHandler} value={input}/>
                <button >Kirim</button>
            </form>
        </div>
    )
}
export default TodoForm