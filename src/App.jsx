/* eslint-disable react/jsx-no-undef */

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import Cart from './Componant/Cart';
import Nav from './Componant/Nav';
import { Routes } from 'react-router-dom';
// import Form from "./assets/Componant/Form";
// import "./Componant/Cart";

// import Cards from './Componant/Cards';

function App() {
 

  return (
    
    <React.Fragment>
      {/* <Form/> */}
      {/* <Nav/> */}
      <Cart/>
      {/* <Cards/> */}
      <Routes>
      
      {/* <Route path="/Products" element={<Cart />} /> */}

      </Routes>
    </React.Fragment>
    
    
  
  )
}

export default App
