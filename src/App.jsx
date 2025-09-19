import { useState } from 'react'
import './App.css'

import Search from './components/Search';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';

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

const [search, setSearch] = useState("");

const [filter, setFilter] = useState("All");
const[sort, setSort]= useState("Asc");

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

const removeTodo= (id) =>{
  const newTodos = [...todos];
  const filteredTodos = newTodos.filter((todo) => 
    todo.id !== id ? todo: null
);
  setTodos(filteredTodos);
}

const completeTodo = (id) =>{
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  setTodos(newTodos)
}

  return( <div className='app'> 
  <h1>Lista de Tarefas</h1> 
  
  <Search search={search} setSearch={setSearch} />
  <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

  <div className='todo-list'>
    {todos
    .filter((todo) => filter === "All" // Filtra se minha atividade foi Completa ou Incompleta
    ? true //Se tiver  All, vai ta true, não filtra nada
    : filter === "Completed" // Se tiver Completed, retorna tarefas que tenham o isCompleted como true
    ? todo.isCompleted 
    : !todo.isCompleted) //Se não, retorna todas as tarefas não completas
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()) //Busca em tempo real no meu componente
    )
    .sort((a, b) => sort === "Asc" 
    ? a.text.localeCompare(b.text) //se o text A for mais que o text b, ele ordem em ordem alfabética
    : b.text.localeCompare(a.text) // ordena em ordem descrecente
  )
    .map((todo) => ( //listar meus objetos
     <Todo key= {todo.id} 
     todo ={todo} 
     removeTodo={removeTodo} 
     completeTodo={completeTodo}/> //Injetado do Todo.jsx
    ))}
  </div>
    <TodoForm addTodo={addTodo}/>
  </div>
);
}

export default App
