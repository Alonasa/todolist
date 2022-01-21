import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from '../Todolist.module.css';

type propsType = {
  error: string | null
  taskHandler: ()=>void
  task: string
  setTask: (title: string)=>void
}

const InputField = (props: propsType) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
	props.setTask(event.currentTarget.value);
  }
  
  const keyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
	if (event.key === 'Enter') {
	  props.taskHandler()
	}
  }
  
  return (
	<div>
	  <input className={props.error ? styles.error : ''} value={props.task}
			 onChange={changeHandler} onKeyPress={keyHandler}/>
	</div>
  );
};

export default InputField;