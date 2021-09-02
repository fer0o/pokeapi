import React from 'react';
const {useState} = React;


const Searchbar = () =>{
    const [search,setSearch] = useState('');
    const onChange = (event)=>{
        setSearch (event.target.value);
    }
    const onClick =(event)=>{
        console.log("Apretando boton")

    }
    return(
        <div>
            <div>
                <input placeholder="Buscar Pokemon..." onChange={onChange}/>
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>


    );

};

export default Searchbar;