import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  
  state = {
    pokemons: []
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonArray => {
      let newpokeArray = pokemonArray.map(poke => poke = {...poke, imgFront: true})
      this.setState({
        pokemons: newpokeArray
      })
    })
  }

  displayImage = (clickedPokemon) => {
    let newPokemonArray = this.state.pokemons.map(pokemon => {
        if(pokemon === clickedPokemon){
          return {...pokemon, imgFront: !pokemon.imgFront}
        }
        return pokemon
      })
      
    this.setState({
      pokemons: newPokemonArray
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.state.pokemons.map(pokemon => <PokemonCard pokemon={pokemon}  displayImage={this.displayImage}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
