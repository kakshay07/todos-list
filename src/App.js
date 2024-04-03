import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from "./components/footer";
import Todos from './components/todos';
import { Addtodos } from './components/addtodos';
// import Todoitem from "./components/todoitem"
import './App.css';


function App() {
  let initTodo;
if(localStorage.getItem("todos")==null){
  initTodo=[]
}else{
 initTodo=JSON.parse( localStorage.getItem("todos"));
}
let onDelete = (todo) => {
 
setTodos(todos.filter((e)=>{

  return e!==todo;
  
}
))
}

const [todos,setTodos]=useState([initTodo

])

const addTodo=(title,desc,sn0)=>{
console.log("your todo is",title,desc);
// let sn0=todos[todos.length-1].sn0+1;

const myTodos={
  title:title,
  desc:desc,
  sn0:sn0,
}


setTodos([...todos,myTodos]);
// console.log("sss",todos,myTodos)


}
useEffect(() => {
  // Code for side effects, such as data fetching, can be placed here
localStorage.setItem("todos",JSON.stringify(todos))
}, [todos]);
  return (
    <>
    <Header title="My todo"searchBar={true}/>
    <Addtodos addTodo={addTodo}/>
    <Todos  todos={todos} onDelete={onDelete}/>
    {/* <Todoitem/>  */}
    <Footer/>
   </>
  );
}

export default App;
