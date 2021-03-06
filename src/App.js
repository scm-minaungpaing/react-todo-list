import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodo, setFilterTodo] = useState([])

  useEffect(() => {
    const getLocalTodos = () => {
      // if (localStorage.getItem("todos") === null) {
      //   localStorage.setItem("todos", JSON.stringify([]));
      // } else {
        let localTodo = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodo)
      // }
    }
    getLocalTodos();
  }, [])

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterTodo(todos.filter((todo) => todo.complete))
          break;
        case "uncompleted":
          setFilterTodo(todos.filter((todo) => !todo.complete))
          break;
        default:
          setFilterTodo(todos)
          break;
      }
    }
    filterHandler();

    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    saveLocalTodos();
  }, [ todos, status])


  return (
    <div className="App">
      <header>
        <h2>MAP TODO LIST</h2>
      </header>
      <Form 
      setStatus={setStatus} 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      />
      <TodoList setTodos={setTodos} todos={todos} 
      filterTodo={filterTodo}/>
    </div>
  );
}

export default App;
