import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([//Permite renderização da minha variavel
  { //DADOS
    id:1,
    text:"Criar funcionalidade X no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id:2,
    text:"Ir para a academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id:3,
    text:"Estudar React",
    category: "Faculdade",
    isCompleted: false,
  },
  {
    id:4,
    text:"Aniversário de Gabi",
    category: "Lazer",
    isCompleted: false,
  },
]);

const addTodo = (text, category) => {

  const newTodos = [...todos,{
    id: Math.floor(Math.random()*10000),
    text,
    category,
    isCompleted: false,
  },
];
  setTodos(newTodos);
}

  return( <div className='app'> 
  <h1>Lista de Tarefas</h1> 
  
  <div className='todo-list'>
    {todos.map((todo) => ( //listar meus objetos
     <Todo key= {todo.id} todo ={todo}/> //Injetado do Todo.jsx
    ))}
  </div>
    <TodoForm addTodo={addTodo}/>
  </div>
);
}

export default App
