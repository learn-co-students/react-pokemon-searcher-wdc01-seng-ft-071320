import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemonsArray: [],
    isClicked: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((listOfPokemons) =>
        this.setState({
          pokemonsArray: listOfPokemons,
        })
      );
  }

  toggleImage = (id) => {
    // console.log(id);
    let foundPok = this.state.pokemonsArray.filter((pok) => pok.id === id);
    this.setState({
      pokemonsArray: [...this.state.pokemonsArray, foundPok],
    });
  };

  render() {
    // console.log(this.state.pokemonsArray);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection
          allpokemons={this.state.pokemonsArray}
          toggleImage={this.toggleImage}
        />
      </Container>
    );
  }
}

export default PokemonPage;
