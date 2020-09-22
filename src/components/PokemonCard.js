import React from 'react'
import { Card } from 'semantic-ui-react'
class PokemonCard extends React.Component {

  state=
  {isFront:true}

  handleOnClick= () => {
    
    this.setState({
      isFront:!this.state.isFront
    })
  }

  render() {
    const{hp,name}= this.props.pokemon
    const{front,back}= this.props.pokemon.sprites
    return (
      <Card onClick={this.handleOnClick}>
        <div>
          <div className="image">
            <img src={this.state.isFront? front:back}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
