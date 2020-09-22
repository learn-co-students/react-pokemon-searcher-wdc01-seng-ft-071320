import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = "http://localhost:3000/pokemon"
class PokemonPage extends React.Component {

  state = {
    pokedex:[],
    displayPokemon:[]
  }
  componentDidMount(){
    fetch(URL)
      .then(res=>res.json())
      .then(pokemon => this.setState({
        displayPokemon:pokemon,
        pokedex:pokemon
      }))
  }

  handleSearch=(event) => {
    let input = event.target.value.toLowerCase()
    
    // .toLowerCase().split()
  let newDisplayPokemon = this.state.pokedex.filter(pokemon => {
     return pokemon.name.toLowerCase().includes(input)

  })
  
  this.setState({
    displayPokemon:newDisplayPokemon
  })
  }


  handleSubmit= (event) => {
    event.preventDefault()
    
    const requestOptions = {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name: event.target[0].value,
        hp: event.target[1].value,
        sprites:{front: event.target[2].value,
          back: event.target[3].value}
      })
      }
    
    fetch(URL, requestOptions)
    .then(res=> res.json())
    .then(newPokemon =>{
      this.setState({
      pokedex:[...this.state.pokedex,newPokemon],
      displayPokemon:[...this.state.displayPokemon,newPokemon]
    })}
    )}
  
  
      
  



  

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search 
        handleSearch={this.handleSearch}
        />
        <br />
        <PokemonCollection 
        
        pokedex={this.state.displayPokemon}
        />
      </Container>
    )
  }
}

export default PokemonPage
