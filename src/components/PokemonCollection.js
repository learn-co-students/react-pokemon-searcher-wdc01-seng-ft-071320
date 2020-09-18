import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  makePokemon = () => {
    return this.props.pokemons.map(pokemon => (<PokemonCard pokemon={pokemon} />))
  }
  
  render() {
    
    return (
      <Card.Group itemsPerRow={6}>
        {this.makePokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
