import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  handleChange= (value) => {
    console.log(value)
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection />
      </Container>
    )
  }
}

export default PokemonPage
