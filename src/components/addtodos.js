import React, { useState } from 'react'

export const Addtodos = ({addTodo}) => {
const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");
const [sn0,setSn0]=useState(1);


const submit=(e)=>{
  e.preventDefault();
  if((!title) || (!desc)){
    alert("title or desc cannot be null.!");
    return;
  }
addTodo(title,desc,sn0);
setSn0(prevSn0 => prevSn0 + 1); // Increment sn0 for the next todo
setTitle(""); // Clear input fields after submission
setDesc("");
}
  return (
    <div className='container my-3'>
        <form onSubmit={submit}>
            <h3>Add todos here</h3>
    <div class="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Todo Name</label>
      <input type="text" value={title} className="form-control"  onChange={(e)=>setTitle(e.target.value)}id="title" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">Good Idea .</div>
    </div>
    <div class="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Description of Todo</label>
      <input type="text" value={desc} 
      onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
    </div>
  
    <button type="submit" className="btn btn-sm btn-success">Submit</button>
  </form></div>
  )
}
