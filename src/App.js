import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './api/api';

//parte de renderizar los pokemons de componente padre a hijo (pokedex) por medio de props
const {useState,useEffect} = React;
//uso de hooks


export default function App (){
  const [pokemons, setPokemons] = useState([])

  //para obtener los datos de la api con el useEffect
  const fetchPokemons = async()=>{
    try{
      //promises...
      const data = await getPokemons()
      console.log(data.results)
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)

    }
    catch(err){

    }
  }

  useEffect(() =>{
    fetchPokemons();


  },[])
  //array 0 dependencias

  return(
    //primero el navbar//
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar/>
        <Pokedex pokemons={pokemons}/>
      </div>
    </div>


  );
} ;