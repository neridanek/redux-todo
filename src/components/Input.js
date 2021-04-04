import React,{useState} from 'react'
import styles from './Input.module.scss'
import {useDispatch} from 'react-redux'
import {saveTodo} from '../features/counter/todoSlice'

const Input = () => {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();
    const addTodo = ()=>{
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now(),   
        }))
    }
    return (
        <div className={styles.Input} >
            <input type="text" value={input} onChange={e =>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default Input
