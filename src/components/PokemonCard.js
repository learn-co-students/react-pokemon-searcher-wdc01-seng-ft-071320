import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    let pokemon = this.props;
    // console.log(this.props);
    return (
      <Card>
        <div onClick={() => this.props.toggleImage(pokemon.id)}>
          <div className="image">
            <img src="pokemon.sprites.back" alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
