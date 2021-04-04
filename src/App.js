import React from 'react';
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import styles from './App.module.scss'

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/counter/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <div className={styles.appTodoContainer}>
          {todoList.map(item=>(
          <TodoItem name={item.item} done={item.done} id={item.id}/>
          ))}
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
