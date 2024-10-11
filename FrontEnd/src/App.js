



import './App.css';
import Axios from 'axios'

import React, { Component, useEffect, useState } from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Buysection from './components/Buysection';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Contact from './components/Contact';
import Shop from './components/Shop';
import About_us from './components/About';
import Cart from './components/Cart';




export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };


  const[movieReviewList,setMovieReviewList]=useState([])

useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
        setMovieReviewList(response.data);
    });
  }, []);
  
  return (
    <div>
       <div>
        <Router>
          <NavBar/>
        <Routes>
            <Route exact  path='/' element={<Buysection/>}/>
            <Route exact  path='/About_us' element={<About_us/>}/>
            <Route exact  path='/Shop' element={<Shop addToCart={addToCart} />}/>
            <Route exact  path='/Contact' element={<Contact/>}/>
            <Route exact path='/Cart' element={<Cart cart={cart} />} />
        </Routes> 
        </Router>
        <Footer/>
       </div>
    </div>
  )
 }



