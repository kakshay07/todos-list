import React from 'react'
import Todoitem from './todoitem.js';
 const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.map((todo)=>{
      return (
        <>
      <Todoitem todo1={todo} key={todo.sn0} onDelete={props.onDelete}/><hr></hr>
      </> 
      )}
     
       )}
      
    
    </div>
  )
}
export default Todos;