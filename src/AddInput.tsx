import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './Todolist.module.css';

type inputType = {
  addTask: (title: string) => void
  error: string | null
}


export const AddInput = (props: inputType) => {
  const[task, setTask] = useState('')
  
  
  const changeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
	setTask(event.currentTarget.value);
  }
  
  const taskHandler = () => {
	props.addTask(task)
	setTask('')
  }
  
  const keyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
	if (event.key === 'Enter') {
	  taskHandler()
	}
  }
  
  return (
	<div>
	  <input className={props.error ? styles.error : ''} value={task}
			 onChange={changeHandler} onKeyPress={keyHandler}/>
	  <button onClick={taskHandler}>+</button>
	  {props.error &&
      <div className={styles.error__message}>{props.error}</div>}
	</div>
  );
};

export default AddInput;