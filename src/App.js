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



///guardado localStorage
//const localStorage =

export default function App (){
  const [pokemons, setPokemons] = useState([])
  //---> paginacion para pokemons///

const [page, setPage] = useState(0);
const [total, setTotal] = useState(0);
const [loading,setLoading] = useState(true);
//nuevo state variable para el favorite pokemon. este state es para uso de context
const [favorites,setFavorites] = useState([]);
///investigacion del search
const [notFound, setNotFound] = useState(false);
const [searching, setSearching] = useState(false);

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
      setNotFound(false)

    }
    catch(err){

    }
  }
  useEffect(()=>{
    if(!searching){
      fetchPokemons();
    }
  },[page])
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

  const onSearch = async (pokemon) =>{
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true)
    setNotFound(false)
    setSearching(true)
    const results = await searchPokemon(pokemon);
    if(!results){
      setNotFound(true);
      setLoading(false);
      return;
    }
    else{
      setPokemons([results]);
      setPage(0)
      setTotal(1)
    }
    setLoading(false)
    setSearching(false)
  }


  return(
    //en esta parte mandamos a llamar el useContext de favoritePokemos -> falta crear variable favoritePokemons
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons
    }}
    >
    {/* //primero el navbar// */}
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar onSearch={onSearch}/>
        {notFound?(
          <div>No se encontro el pokemon que buscabas 😞 </div>
        ):(
        
        <Pokedex pokemons={pokemons}
        loading={loading}
        page = {page}
        setPage = {setPage}
        total = {total}/>
        )}
      </div>
    </div>
    </FavoriteProvider>


  );
} ;