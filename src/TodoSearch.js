import React from 'react';  
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) 

{
  

  console.log('Los usuarios buscan todos de: ' + searchValue);

  return (
    <input
      placeholder="Buscar una tarea"
      className="TodoSearch"
      value ={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };