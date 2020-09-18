import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    cardSide: "front"
  }

  handleClick = () => {
    if (this.state.cardSide === "front"){
      this.setState({
        cardSide: "back"
      })
    }
    else if (this.state.cardSide === "back"){
      this.setState({
        cardSide: "front"
      })
    }
  }

  displayCard = () => {
    return this.state.cardSide === "front" ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
  }

  render() {
    return (
      <Card onClick={() => this.handleClick()}>
        <div>
          <div className="image">
            <img src={this.displayCard()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
