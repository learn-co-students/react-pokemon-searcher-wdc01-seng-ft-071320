import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemons: [],
      displayPokemons: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(allPokemons => this.setState({pokemons: allPokemons, displayPokemons: allPokemons}))
  }


  addPokemon = (value) => {
    // debugger
    let newPokemon = {
        name: value.target[0].value,
        hp: value.target[1].value,
        sprites: {
          front: value.target[2].value,
          back: value.target[3].value
        }
    }
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        newPokemon
      )
    })
    .then(res => res.json())
    .then(newPokemon => {
      let updatedPokemon = [...this.state.pokemons, newPokemon]
      this.setState({pokemons: updatedPokemon})
    })
    value.target.reset()
  }


  searchByName = (e) => {
    let typedName = e.target.value
    // let findPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(typedName))
    let findPokemon = this.state.pokemons.filter( pokemon => pokemon.name.slice(0, typedName.length) === typedName)
    this.setState({
      displayPokemons: findPokemon
    })

  }




  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchByName={this.searchByName} />
        <br />
        <PokemonCollection  pokemons={this.state.displayPokemons}  />
      </Container>
    )
  }

}
export default PokemonPage
