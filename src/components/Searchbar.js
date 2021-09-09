import React from 'react';
import { searchPokemon } from '../api/api';
const {useState} = React;



const Searchbar = (props) =>{
    const {onSearch} = props; 
    const [search,setSearch] = useState(" ");
    //const [pokemon, setPokemon] = useState();
    

    const onChange = (event)=>{
        setSearch (event.target.value);
        if(event.target.value.length ===0){
            onSearch(null);
        }
    };

    const onClick = async (e)=>{
        //const data = await searchPokemon(search)
        //setPokemon(data);
        onSearch(search)
    };

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon..." onChange={onChange}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>


    );

};

export default Searchbar;