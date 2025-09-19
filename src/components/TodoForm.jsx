import {useState} from 'react'

const TodoForm = () => {

  const [value, setValue]= useState(""); //Vão ser preenchidos pelo INPUT
  const [category, setCategory]= useState("");

  const handleSubmit = (e) => { // Ele cuida do SUbMIT do formulário
  e.preventDefault();
  if(!value || !category) return;
  setValue("")
  setCategory("")
  
  }

  return (
    <div className='todo-from'>
      <h2>Criar tarefa</h2> 
      <form onSubmit={handleSubmit}> {/**Quando o form for enviado, ele dispara a função handleSubmit */}
        <input type="text" 
        placeholder='Digite o título' 
        value={value}
        onChange={(e) => setValue(e.target.value)}/>

        <select value={category} onChange={(e) => setCategory(e.target.category)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Faculdade">Faculdade</option>
          <option value="Lazer">Lazer</option>
        </select>

        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
