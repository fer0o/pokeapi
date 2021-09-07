import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';

//props se maneja como objeto
const Pokedex =(props)=>{
    // const pokemons = props.pokemons;
    // const page  = props.page;
    // const setPage = props.setPage;
    const {pokemons,page,setPage,total} = props;
    ///funcion para determinar ultima paginacion
    const lastPage =()=>{
        const nextPage = Math.max(page -1,0);
        setPage(nextPage)   
    }

    //funcion para hacer siguiente paginacion
    const nextPage =()=>{
        const nextPage = Math.min (page +1,total)
        setPage(nextPage)

    } 



    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <Pagination
                page={page +1}
                totalPages={111}
                onLeftClick={lastPage}
                onRightClick ={nextPage}
                />
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