import React from 'react'
import Pokemon from './Pokemon';

//props se maneja como objeto
const Pokedex =(props)=>{
    const pokemons = props.pokemons;
    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon,idx)=>{
                    return(
                        <Pokemon pokemon = {pokemon} key ={pokemon.name}/>                  )
                })}
            </div>
        </div>
    )

}

export default Pokedex;