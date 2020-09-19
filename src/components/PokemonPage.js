import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    fullPokemonsCollection: []
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonArray => {
      let newpokeArray = pokemonArray.map(poke => poke = {...poke, imgFront: true})
      this.setState({
        pokemons: newpokeArray,
        fullPokemonsCollection: newpokeArray
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
      pokemons: newPokemonArray,
      fullPokemonsCollection: newPokemonArray
    })
  }


  handleChange = (value) => {
    console.log(value.length)
    if (value.length > 0){
          let searchedPokemonsArray = this.state.pokemons.filter(pokemon => pokemon.name.includes(value))
          this.setState({
            pokemons: searchedPokemonsArray
          })
        }
    else
          {
          this.setState({
            pokemons: this.state.fullPokemonsCollection
          })
          }
  }

  handleForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let hp = e.target[1].value
    let sprites = {front: e.target[2].value, back: e.target[3].value}
    let imgFront = true
    e.target.reset()
    let configObj = {method: 'POST', headers: {'Content-Type': 'application/json', Accept: 'application/json'},
                body: JSON.stringify({name, hp, sprites, imgFront})}
    fetch('http://localhost:3000/pokemon', configObj)
    .then(res => res.json())
    .then(newPokemon => {
        
        this.setState({
          pokemons: [...this.state.pokemons, newPokemon], 
          fullPokemonsCollection: [...this.state.pokemons, newPokemon]
        })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleForm={this.handleForm}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} displayImage={this.displayImage}/>
      </Container>
    )
  }
}

export default PokemonPage
