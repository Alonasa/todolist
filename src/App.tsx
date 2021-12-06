import React, {useState} from 'react';
import './App.css';
import {filterType, Todolist} from './Todolist';
import {v1} from 'uuid';

function App() {
  
  const [tasks, setTasks] = useState([
	{id: v1(), title: 'What to eat', isDone: true},
	{id: v1(), title: 'What to do', isDone: true},
	{id: v1(), title: 'What to watch', isDone: false},
	{id: v1(), title: 'What to see', isDone: false},
  ])
  
  const [filter, setFilter] = useState('');
  
  let newTask = tasks;
  
  if (filter === 'Active') {
	newTask = tasks.filter(t => !t.isDone)
  }
  if (filter === 'Completed') {
	newTask = tasks.filter(t => t.isDone)
  }
  
  const filtrator = (value: filterType) => {
	setFilter(value)
  }
  
  const remover = (id: string) => {
	setTasks(tasks.filter(f => f.id !== id));
  }
  
  const [error, setError] = useState<string | null>(null)
  
  const addTask = (title: string) => {
    setError(null)
	if (title.trim()) {
	  const addedTask = {id: v1(), title: title.trim(), isDone: false}
	  setTasks([addedTask, ...tasks])
	} else {setError("please fill the field")}
  }
  
  const taskStatus = (tId: string, isDone: boolean) => {
	const task = tasks.find(t => t.id === tId);
	if (task) {
	  task.isDone = !isDone
	}
	setTasks([...tasks])
  }
  
  return (
	<div className="App">
	  <Todolist title={'What to eat'}
				tasks={newTask}
				removeTask={remover}
				addTask={addTask}
				filtrator={filtrator}
				checker={taskStatus}
				error = {error}
				filter={filter}
	  />
	</div>
  );
}

export default App;
