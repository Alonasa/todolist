import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type propsType = {
  title: string
  tasks: Array<taskType>
  removeTask: (id:string)=>void
  addTask: (title: string)=>void
}

type filterType = 'All' | 'Active' | 'Completed'


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
  
  const [filter, setFilter] = useState('');
  
  
  const filtrator = (value: filterType) => {
	setFilter(value)
  }
  
  let newTask = props.tasks;
  if (filter === 'Active') {
	newTask = props.tasks.filter(t => !t.isDone)
  }
  if (filter === 'Completed') {
	newTask = props.tasks.filter(t => t.isDone)
  }
  
  const filterHandler = (value: filterType) => {
	filtrator(value)
  }
  return (
	<div>
	  <h3>{props.title}</h3>
	  <div>
		<input value={task} onChange={changeHandler} onKeyPress={keyHandler}/>
		<button onClick={taskHandler}>+</button>
	  </div>
	  <ul>
		{newTask.map((task) => {
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
