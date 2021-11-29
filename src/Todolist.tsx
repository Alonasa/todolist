import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterType} from './App';

type propsType = {
  title: string
  tasks: Array<taskType>
  removeTask: (id:string)=>void
  filterTasks: (value: filterType)=>void
  addTask: (title: string)=>void
}

type taskType = {
  id: string
  title: string
  isDone: boolean
}

export const Todolist = (props: propsType) => {
  const[task, setTask] = useState('')
  
  const changeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
    setTask(event.currentTarget.value);
  }
  
  const taskHandler = () => {
	props.addTask(task)
	setTask('')
  }
  
  const keyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
   	 if(event.key === 'Enter') {
   	   taskHandler()
	 }
  }
  
  const filterHandler = (value: filterType) => {
	props.filterTasks(value)
  }
  
  return (
	<div>
	  <h3>{props.title}</h3>
	  <div>
		<input value={task} onChange={changeHandler} onKeyPress={keyHandler}/>
		<button onClick={taskHandler}>+</button>
	  </div>
	  <ul>
		{props.tasks.map((task) => {
			return (<li key={task.id}>
			  <input type="checkbox"
					 checked={task.isDone}/>
			  <span>{task.title}</span>
			  <button onClick={()=>props.removeTask(task.id)}>X</button>
			</li>)
		  }
		)}
	  </ul>
	  <div>
		<button onClick={()=>filterHandler('All')}>All</button>
		<button onClick={()=>filterHandler('Active')}>Active</button>
		<button onClick={()=>filterHandler('Completed')}>Completed</button>
	  </div>
	</div>
  )
}
