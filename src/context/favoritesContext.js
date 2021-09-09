import React from "react";

const FavoriteContext = React.createContext({
    //objeto con un array para guardar la info del pokemon
    favoritePokemons:[],
    updateFavoritePokemons: (id)=> null
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;