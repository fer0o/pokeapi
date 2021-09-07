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
  //---> paginacion para pokemons///

const [page, setPage] = useState(1);
const [total, setTotal] = useState();
const [loading,setLoading] = useState(true);

  //para obtener los datos de la api con el useEffect
  const fetchPokemons = async()=>{
    try{
      //promises...
      const data = await getPokemons(25, 25 * page)
      //console.log(data.results)
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)

    }
    catch(err){

    }
  }
//////////primer useEffect
  useEffect(() =>{
    fetchPokemons();


  },[page])
  //array 0 dependencias




  return(
    //primero el navbar//
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar/>
        {
          loading ? (
            <div>Cargando Pokemones..</div>
          ) :(
        
        <Pokedex pokemons={pokemons}
        page = {page}
        setPage = {setPage}/>
          )}
      </div>
    </div>


  );
} ;