import React, { useState } from 'react';
import './App.css';
// Import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Nicolai's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
