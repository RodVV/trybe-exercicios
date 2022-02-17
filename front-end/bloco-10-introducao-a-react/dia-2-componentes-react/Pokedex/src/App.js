import './App.css';
import React from 'react';
import { pokemons } from './data';
import Pokemon from './Pokemon';
// console.log(pokemons);

class App extends React.Component {
  render() {
    return(      
        pokemons.map((pokemon) => {
          return (
          <Pokemon 
          nomeDoPokemon={pokemon.name}
          tipo={pokemon.type}
          peso={pokemon.averageWeight.value}
          img={pokemon.image}
        />)    
        })      
    )
  }
}

export default App;
