import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemonsArray: [],
    searchName: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((listOfPokemons) =>
        this.setState({
          // pokemonsArray: listOfPokemons,
          pokemonsArray: listOfPokemons.map((pokemon) => {
            return { ...pokemon, clicked: false };
          }),
        })
      );
  }

  toggleImage = (id) => {
    // console.log(id);
    // debugger;
    let newArry = this.state.pokemonsArray.map((pokemon) => {
      // console.log(pokemon);
      if (pokemon.id === id) {
        // debugger;
        return { ...pokemon, clicked: !pokemon.clicked };
      }
      return pokemon;
    });
    this.setState({
      pokemonsArray: newArry,
    });
  };

  addPokemon = (e) => {
    e.preventDefault();
    // debugger;
    let name = e.target[0].value;
    let hp = e.target[1].value;
    let front = e.target[2].value;
    let back = e.target[3].value;

    let newPokemon = {
      id: this.state.pokemonsArray.length + 2,
      name,
      hp,
      sprites: {
        front,
        back,
      },
    };

    let configObj = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, hp, sprites: { front, back } }),
    };

    fetch("http://localhost:3000/pokemon", configObj)
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          pokemonsArray: [...this.state.pokemonsArray, newPokemon],
        })
      );
    // form.reset()
  };

  handleSearch = (e) => {
    // debugger;
    this.setState({
      searchName: e.target.value,
    });
  };

  render() {
    // console.log(this.state.pokemonsArray);
    let displayedPokemons = this.state.pokemonsArray.filter((pk) =>
      pk.name.toLowerCase().includes(this.state.searchName)
    );
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection
          // allpokemons={this.state.pokemonsArray}
          allpokemons={displayedPokemons}
          toggleImage={this.toggleImage}
        />
      </Container>
    );
  }
}

export default PokemonPage;
