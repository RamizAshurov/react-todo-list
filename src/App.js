import { useState } from "react"
import Header from "./components/header"
import InputForm from "./components/input-form";
import StatusFilter from "./components/status-filter";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";

import './App.css';

const data = [
  { label: "Drink a coffee", complete: false, important: true },
  { label: "To do React App", complete: false, important: false },
  { label: "Play a football", complete: false, important: false }
];

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("todos")) || data;
}

function setToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}


function App() {
  const [todos, setTodos] = useState(getDataFromLocalStorage());
  const [filterValue, setFilterValue] = useState("all");
  const [inputText, setInputText] = useState("");

  function toggleProperty(arr, label, propertyName) {
    let idx = arr.findIndex(item => item.label === label);
    let oldItem = arr[idx];
    let newItem = {...oldItem, [propertyName]: !oldItem[propertyName]};
    let newArr = [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  
    setToLocalStorage(newArr)
    return newArr
  }

  function makeImportant(label) {
    setTodos((todos) => {
      return toggleProperty(todos, label, "important")
    })
  }

  function makeComplete(label) {
    setTodos((todos) => {
      return toggleProperty(todos, label, "complete")
    })
  }

  function addTodoItem(label) {
    const newTodos = [...todos, { label, important: false, done: false }];
    setTodos(newTodos)
    setToLocalStorage(newTodos)
  }

  function deleteTodoItem(label) {
    const filteredTodos = todos.filter(todo => todo.label !== label);
    setTodos(filteredTodos)
    setToLocalStorage(filteredTodos)
  }

  function filterTodos() {
    if (filterValue === "all") {
      return todos
    }
    return todos.filter(todo => todo[filterValue] === true)
  }

  function handleToggleProperty(propertyName) {
    setFilterValue(propertyName)
  }

  function handleInputChange(text) {
    setInputText(text)
  }


  const completeAmount = todos.filter(todo => todo.complete === true).length
  const todoAmount = todos.length - completeAmount

  const filteredTodos = filterTodos()

  const todoData = inputText === "" ? filteredTodos : filteredTodos.filter(todo => todo.label.toLowerCase().indexOf(inputText.toLowerCase()) !== -1);

  return (
    <div className="App">
      <Header todoAmount={todoAmount} completeAmount={completeAmount} />
      <div className="search-panel">
        <SearchPanel inputText={inputText} handleInputChange={handleInputChange} />
        <StatusFilter activeFilter={filterValue} handleToggleProperty={handleToggleProperty} />
      </div>
      <TodoList todos={todoData} makeImportant={makeImportant} makeComplete={makeComplete} deleteTodoItem={deleteTodoItem}/>
      <InputForm addTodoItem={addTodoItem} />
    </div>
  );
}

export default App;
