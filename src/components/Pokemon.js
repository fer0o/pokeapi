import React from "react";

//creacion de un DOM o pure component -> No tiene estado
//pure component solo es informacion que viene de los props
const Pokemon =(props)=>{
    const {pokemon} = props;
    console.log(pokemon)
    return(
        <div className ="pokemon-card">
            {/* imagen de la izquierda */}
            <div className="pokemon-image">
                <img src={pokemon.sprites.front_default}alt ={pokemon.name}/>
            </div>
            <div>
                {/* Informacion pokemon */}
                <div>
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div>
                    <div>
                        {pokemon.types.map((type,idx)=>{
                            return(
                                <div key={idx}>{type.name}</div>
                            )
                        })}
                    </div>
                    <div> 💗 </div>
                </div>
            </div>
        </div>
    );
};
export default Pokemon;