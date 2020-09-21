import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
let url = ('http://localhost:3000/pokemon')

class PokemonPage extends React.Component {

  //hogs: hogs.map(hog => {return {...hog, clicked: false, hidden: false}})

  constructor(){
    super()
    this.state = {
      pokemons: [],
      showPokemon: [],
    }
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(pokemonArray => this.setState({pokemons : pokemonArray, showPokemon: pokemonArray}))
  }

  handleSearch = (input) => {
    //console.log(input)
    this.setState({
      showPokemon: this.state.pokemons.filter(pokemon => pokemon.name.includes(input))
    })


    

  }

 handleFormSubmit = (e) => {
   e.preventDefault()
   //console.log('submitting')
   let name = e.target[0].value
   let hp = e.target[1].value
   let cardFront = e.target[2].value
   let cardBack = e.target[3].value

   let configObj = {
     method:'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       name: name,
       hp: hp,
       sprites: {
         front: cardFront,
         back: cardBack
       }
     })
    }
    fetch(url, configObj)
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, pokemon],
        showPokemon: [...this.state.showPokemon, pokemon]
      })
      // e.target.reset()
    })
    
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
        <PokemonCollection pokemonData={this.state.pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
