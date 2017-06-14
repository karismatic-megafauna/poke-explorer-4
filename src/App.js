import React, { Component } from 'react';
import './App.css';
import Cell from './Cell';
import pokemonMetadata from 'pokemon-metadata';

const pokeArray = Object.keys(pokemonMetadata);

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          pokeArray.map((poke)=>{
            return(
              <Cell
                key={pokemonMetadata[poke].id}
                name={pokemonMetadata[poke].name}
                id={pokemonMetadata[poke].id}
                sprite={pokemonMetadata[poke].sprites.front_default}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
