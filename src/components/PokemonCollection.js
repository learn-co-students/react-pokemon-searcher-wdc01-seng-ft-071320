import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.allpokemons);
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {this.props.allpokemons.map((pokemon) => (
          <PokemonCard
            {...pokemon}
            key={pokemon.id}
            toggleImage={this.props.toggleImage}
          />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
