import React, { Component } from 'react'

class SongPlayer extends Component {
  render() {
    return (
        <iframe
          title="player"
          src={`https://open.spotify.com/embed/track/${this.props.value.id}`}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media">
        </iframe>
    )
  }
}

export default SongPlayer