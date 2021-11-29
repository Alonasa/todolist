import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type filterType = 'All' | 'Active' | 'Completed'

function App() {
  
  const [task1, setTask1] = useState([
	{id: v1(), title: 'What to eat', isDone: true},
	{id: v1(), title: 'What to do', isDone: true},
	{id: v1(), title: 'What to watch', isDone: false},
	{id: v1(), title: 'What to see', isDone: false},
  ])
  
  const remover = (id: string) => {
	setTask1(task1.filter(f => f.id !== id));
  }
  
  const [filter, setFilter] = useState('');
  
  
  const filtrator = (value: filterType) => {
	setFilter(value)
  }
  
  let newTask = task1;
  if (filter === 'Active') {
	newTask = task1.filter(t => !t.isDone)
  }
  if (filter === 'Completed') {
	newTask = task1.filter(t => t.isDone)
  }
  
  const addTask = (title:string) => {
	const addedTask = {id: v1(), title: title, isDone: false}
	setTask1([addedTask, ...task1])
  }
  
  
  return (
	<div className="App">
	  <Todolist title={'What to eat'}
				tasks={newTask}
				removeTask={remover}
				filterTasks={filtrator}
				addTask={addTask}
	  />
	</div>
  );
}

export default App;
