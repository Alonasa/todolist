import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './Todolist.module.css';
import {Input} from './Input/Input';

type propsType = {
  title: string
  tasks: Array<taskType>
  removeTask: (id: string) => void
  addTask: (title: string) => void
  filtrator: (value: filterType) => void
  checker: (tId: string, isDone: boolean) => void
  error: string | null
  filter: string
}

export type filterType = 'All' | 'Active' | 'Completed'

type taskType = {
  id: string
  title: string
  isDone: boolean
}

export const Todolist = (props: propsType) => {
  const[task, setTask] = useState('')
  
  
  const filterHandler = (value: filterType) => {
	props.filtrator(value)
  }
  
  const statusHandler = (e: boolean, tId: string, isDone: boolean) => {
	props.checker(tId, isDone)
  }
  
  const activeFilterHandler = (value: filterType)=> {
	return (props.filter === value ? styles.filter__active: '')
  }
  
  return (
	<div>
	  <h3>{props.title}</h3>
	  <Input addTask={props.addTask} error={props.error} task={task} setTask={setTask}/>
	  <ul>
		{props.tasks.map((task) => {
			return (<li key={task.id}>
			  <input onChange={(e) => statusHandler(e.currentTarget.checked, task.id, task.isDone)} type="checkbox"
					 checked={task.isDone}/>
			  <span className={task.isDone ? styles.task__done : ""}>{task.title}</span>
			  <button onClick={()=>props.removeTask(task.id)}>X</button>
			</li>)
		  }
		)}
	  </ul>
	  <div>
		<button className={activeFilterHandler('All')} onClick={()=>filterHandler('All')}>All</button>
		<button className={activeFilterHandler('Active')} onClick={()=>filterHandler('Active')}>Active</button>
		<button className={activeFilterHandler('Completed')} onClick={()=>filterHandler('Completed')}>Completed</button>
	  </div>
	</div>
  )
}
