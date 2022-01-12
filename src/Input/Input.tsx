import React from 'react';
import styles from '../Todolist.module.css';
import InputField from './InputField';
import {Button} from './Button';

type inputType = {
  addTask: (title: string) => void
  error: string | null
  task: string
  setTask: (type: string) => void
}


export const Input = (props: inputType) => {
  
  const taskHandler = () => {
	props.addTask(props.task)
	props.setTask('')
  }
  
  return (
	<div>
	  <InputField error={props.error} taskHandler={taskHandler} task={props.task}
				  setTask={props.setTask}/>
	  <Button taskHandler={taskHandler}/>
	  {props.error &&
      <div className={styles.error__message}>{props.error}</div>}
	</div>
  );
};

