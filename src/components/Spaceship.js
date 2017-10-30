import React from 'react'

class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <p><strong>Name:</strong> {this.props.name}</p>
        <p><strong>Speed:</strong> {this.props.speed}</p>
        <p><strong>Has Rockets:</strong> {this.props.hasRockets}</p>
        <p><strong>Colors: </strong> {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

export default Spaceship

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
