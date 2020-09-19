import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    image: true
  }
  handleClick = () => {
    let image = !this.state.image
    this.setState({image})
  }

  render() {
    let pokemon = this.props.pokemon
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.image? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
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
    )
  }
}

export default PokemonCard
