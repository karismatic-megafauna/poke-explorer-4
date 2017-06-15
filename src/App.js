import React, { Component } from 'react';
import './App.css';
import Cell from './Cell';
import pokemonMetadata from 'pokemon-metadata';

const pokeArray = Object.keys(pokemonMetadata);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" }
  }
  render() {
    return (
      <div>
        <input name="searchBar" onChange={(e) => {
            this.setState({searchTerm: e.target.value})
          }}/>
        <div className="App">
          {
            pokeArray
              .filter((poke)=> {
                return pokemonMetadata[poke].name.includes(this.state.searchTerm)
              })
            .map((poke)=>{
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
      </div>
    );
  }
}

export default App;
