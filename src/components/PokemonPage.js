import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    displayPokemon: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokemons => this.setState({pokemon: pokemons, displayPokemon: pokemons}))
  }

  handleSearch = (value) => {
    let length = value.length
    let searchPokemon = this.state.pokemon.filter( pokemon => pokemon.name.slice(0,length) === value)
    this.setState({displayPokemon: searchPokemon})
  }

  handleSubmitForm = (e) =>{
    let newPokemon = {
      name: e.target[0].value,
      hp: e.target[1].value,
      sprites:{
        front: e.target[2].value,
        back: e.target[3].value
      }
    }
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }
    fetch("http://localhost:3000/pokemon", config)
    .then(res => res.json())
    .then(newPokemon => {
      let allPokemon = [...this.state.pokemon, newPokemon]
      this.setState({displayPokemon: allPokemon})
    })
    e.target.reset()
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submit={this.handleSubmitForm}/>
        <br />
        <Search search={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={this.state.displayPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
