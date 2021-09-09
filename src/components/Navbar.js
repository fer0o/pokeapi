import React from 'react';
import FavoriteContext from '../context/favoritesContext';

//se va a usar useContext para actualizar el numero del corazon de favoritos, se va a usar el useContext
const { useContext } = React;


const Navbar =()=>{


    const {favoritePokemons}= useContext(FavoriteContext);
    console.log(favoritePokemons)
    //imagen por url
let imageUrl="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div/>
            <div>
                <img src ={imageUrl} alt ="pokeapi-logo"className="navbar-image"/>
            </div>
            <div> &#10084;&#65039; {favoritePokemons.length}</div>
        </nav>
    );
};

export default Navbar;