import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state ={
    pokemons: [],
    pokemonToDisplay: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons: pokemons, pokemonToDisplay: pokemons}))
  }

  handleSearch = (input) => {
    this.setState({
      pokemonToDisplay: this.state.pokemons.filter(pokemon => pokemon.name.includes(input))
    })
    
  }

  handleFormSubmit = (e) =>  {
    e.preventDefault()

    let name = e.target[0].value
    let hp = e.target[1].value
    let front = e.target[2].value
    let back = e.target[3].value

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, 
        hp, 
        sprites: {
          front, back
        }
      })
    }

    fetch("http://localhost:3000/pokemon", configObj)
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, pokemon],
        pokemonToDisplay : [...this.state.pokemonToDisplay, pokemon]
      })
    })

    e.target.reset()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleFormSubmit={this.handleFormSubmit} />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemonToDisplay}/>
      </Container>
    )
  }
}

export default PokemonPage
