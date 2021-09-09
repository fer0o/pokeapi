import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons,searchPokemon } from './api/api';
import { FavoriteProvider } from './context/favoritesContext';

//parte de renderizar los pokemons de componente padre a hijo (pokedex) por medio de props
const {useState,useEffect} = React;
//uso de hooks


export default function App (){
  const [pokemons, setPokemons] = useState([])
  //---> paginacion para pokemons///

const [page, setPage] = useState(0);
const [total, setTotal] = useState(0);
const [loading,setLoading] = useState(true);
//nuevo state variable para el favorite pokemon. este state es para uso de context
const [favorites,setFavorites] = useState([]);

  //para obtener los datos de la api con el useEffect
  const fetchPokemons = async()=>{

    try{
      setLoading(true)
      //promises...
      const data = await getPokemons(25, 25 * page)
      //console.log(data.results)
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count /25) )

    }
    catch(err){

    }
  }
//////////primer useEffect
  useEffect(() =>{
    fetchPokemons();


  },[page])
  //array 0 dependencias

  const updateFavoritePokemons =(name)=>{
    //console.log(name)
    const updated =[...favorites]
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >=0){
      updated.splice(isFavorite,1)
    }
    else{
      updated.push(name)
    }
    setFavorites(updated)
  }


  return(
    //en esta parte mandamos a llamar el useContext de favoritePokemos -> falta crear variable favoritePokemons
    <FavoriteProvider value={{
      favoritePokemons: favorites, updateFavoritePokemons
    }}
    >
    {/* //primero el navbar// */}
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar/>
        
        <Pokedex pokemons={pokemons}
        loading={loading}
        page = {page}
        setPage = {setPage}
        total = {total}/>
      </div>
    </div>
    </FavoriteProvider>


  );
} ;