import React from 'react'
import styles from './TodoItem.module.scss'
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch} from 'react-redux'
import {setCheck} from '../features/counter/todoSlice'

export const TodoItem = ({name,done,id}) => {
    const dispatch = useDispatch()
    const handleCheck = () =>{
        dispatch(setCheck(id))
    }
    return (
        <div className={styles.todoItem}>
            <Checkbox
            checked={done}
            color="primary"
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && styles.todoItemDone}>{name}</p>
        </div>
    )
}
export default TodoItem


