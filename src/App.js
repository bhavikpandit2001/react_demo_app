import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home';

import Register from './components/Register';

import Login from './components/Login';

// import './App.css';

import ErrorBoundry from './components/ErrorBoundry';


import Products from './components/protectedComponents/Products';
import ProductView from './components/protectedComponents/ProductView';


function App() {
  return (
    <div className="App">
      <ErrorBoundry>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="CART"/>}/>
        <Route path='/register' element={<Register name= "user"/>}/>
        <Route path='/login' element={<Login name="user"/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:productid' element={<ProductView/>}/>
      </Routes>
      </ErrorBoundry>
    </div>
  )
}

export default App;
