import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    let pokemon = this.props;
    let imageUrl = pokemon.clicked
      ? pokemon.sprites.back
      : pokemon.sprites.front;
    // console.log(this.props);
    // console.log(imageUrl);
    return (
      <Card>
        <div onClick={() => this.props.toggleImage(pokemon.id)}>
          <div className="image">
            <img src={imageUrl} alt="oh no!" />
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
