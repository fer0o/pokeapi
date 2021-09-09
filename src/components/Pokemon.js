import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

//creacion de un DOM component o pure component -> No tiene estado
//pure component solo es informacion que viene de los props
const Pokemon =(props)=>{
    const {pokemon} = props;
    //console.log(pokemon)
    //------> uso de; useContex para poder hacer el cambio en el corazon de negro a rojo
    const {favoritePokemons,updateFavoritePokemons} = useContext(FavoriteContext)

    //corazones
    const redHeart = "💗" 
    const blackHeart =" 🖤 "
    const heart = favoritePokemons.includes(pokemon.name)? redHeart : blackHeart

    //evento favoritepokemon onClick
    const clickHeart = (event)=>{
        event.preventDefault();
        updateFavoritePokemons(pokemon.name)

    }


    return(
        <div className ="pokemon-card">
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.front_default}alt ={pokemon.name} className="pokemon-img"/>
            </div>
            <div className ="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type,idx)=>{
                            return <div key={idx} className="pokemon-type-text"> {type.type.name} </div>
                        })}
                    </div>
                    <button onClick={clickHeart}>
                        <div className="favorite"> {heart} </div>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};
export default Pokemon;