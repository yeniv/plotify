import React, { Component } from "react"
import './movieNotFound.css'

class MovieNotFound extends Component {
  render() {
    if (this.props.movieFound) {
      return null
    }

    return (
      <div className='movie-not-found'>
        <img
          src="https://media.giphy.com/media/3oEdvaxcFPKdt9V5mM/giphy.gif"
          alt=""/>
      </div>
    )
  }
}

export default MovieNotFound
