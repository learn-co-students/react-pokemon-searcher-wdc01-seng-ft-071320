import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    let pokemon = this.props.pokemon
      return (
        <Card>
          <div >
            <div className="image" onClick={() => this.handleClick()}>
              <img src= {this.state.front ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
            </div>
            <div className="content">
              <div className="header"> { pokemon.name } </div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                { pokemon.hp } hp
              </span>
            </div>
          </div>
        </Card>
      )
  }
}

export default PokemonCard
