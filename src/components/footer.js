import React from 'react'

const Footer = () => {

  let footerstyle={
    position:"relative",
  
 
    width:"100%",
      color:"blue",
     top:"10px",
      fontfamily: "Sans-Serif",
      textalign: "center",
      fontsize:"100px"
   
  }
  return (
  
      
      <div class="footer-container">
<div className='bg-dark  py-3'style={footerstyle}>
<h1 style={{backgroundColor: "red"}}>Hello Style!</h1>
  <p className='text-center my-3'>Copyright &copy; MytodosList.com</p>
</div>
    </div>
  )
}
export default Footer;