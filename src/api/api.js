export const searchPokemon = async (pokemon)=>{
    try{
        let url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json()
        return data;

    }
    catch(err){

    }
};

export const getPokemons = async (limit = 25, offset = 0)=>{ //default limit params
    try{
        let url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}` //queryparams 
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
    catch(err){

    }
}
//promises.....
export const getPokemonData = async (url)=>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data;

    }
    catch(err){

    }
}