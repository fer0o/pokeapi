import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

export default function App (){
  return(
    //primero el navbar//
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar/>
      </div>
    </div>


  );
} ;