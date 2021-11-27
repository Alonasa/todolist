import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

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
  
  const addTask = (title:string) => {
    if(title) {
	  const addedTask = {id: v1(), title: title, isDone: false}
	  setTask1([addedTask, ...task1])
	} else (alert('please fill the field'))
  }
  
  
  return (
	<div className="App">
	  <Todolist title={'What to eat'}
				tasks={task1}
				removeTask={remover}
				addTask={addTask}
	  />
	</div>
  );
}

export default App;
