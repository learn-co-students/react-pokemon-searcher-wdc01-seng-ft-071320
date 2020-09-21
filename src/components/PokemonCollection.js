import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
      <h1>Pokemon Collection</h1>
        { this.props.pokemons.map(eachPokemon => 
            <PokemonCard pokemon={eachPokemon} key={eachPokemon.id} 
              />) }
      </Card.Group>
    )
  }
}

export default PokemonCollection
