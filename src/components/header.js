import React from 'react'

import PropTypes from 'prop-types'; // ES6
 // ES5 with npm
const Header = (props) => {
  return (
   <>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css"
      />
   <nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="a">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="anavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="a">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="a">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="a">Contact </a>
        </li>
       </ul>
       
      {props.searchBar ? <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
    </div>
  </div>
</nav>
   </>
  )
}
export default Header;


Header.defaultProps={
  title:"todo"
}
// Header.PropTypes={
// title:PropTypes.string
// }