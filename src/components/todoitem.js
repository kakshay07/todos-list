import React from 'react'



 const Todoitem = ({todo1,onDelete}) => {
  // const [items,setItems]=useState(['apple','bannana','pineapple','orange'])
  // const shuffle = () => {
  //   const shuffledItems = [...items]; // Create a copy of the items array
  //   for (let i = items.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]]; // Swap elements
  //   }
  //   setItems(shuffledItems); // Update state with the shuffled array
  // };
  
  return (
  
//        <> 
//        {/* {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
     
//      <button onClick={shuffle} style={{ backgroundColor: 'red' }}>shuffle</button> */}

     
// </>
<>
{todo1 && todo1.title && (
  <>
    <h1>{todo1.title}</h1>
    {todo1.desc && <p>{todo1.desc}</p>}
    <button className="btn btn-danger" onClick={onDelete}>Delete</button>
  </>
)}
{!todo1 && (
  <p>No todos to display</p>
)}
</>
 
  )
}
export default Todoitem;
