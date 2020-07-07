/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../api/API';

export class Movie extends Component {
  constructor() {
    super();
    this.state = {
      src: '',
      title: '',
      director: '',
      imdb: '',
      plot: '',
    };
  }

  static get propTypes() {
    return {
      modal: PropTypes.func,
      movie: PropTypes.any,
    };
  }

  dimPoster = (e) => {
    e.target.style.opacity = 0.7;
  }

  resetPoster = (e) => {
    e.target.style.opacity = 1;
  }

  getMovieInfo = (obj) => {
    const param = { apikey: 'd3881b2d', i: this.props.movie };
    const api = new API();
    api
      .get('', param)
      .then((response) => {
        obj.setState({
          src: response.data.Poster,
          title: response.data.Title,
          director: `Directed By ${response.data.Director}`,
          imdb: response.data.imdbRating,
          plot: response.data.Plot,
        });
      });
  }

  render() {
    // const req = `https://www.omdbapi.com/?apikey=d3881b2d&i=${props.movie}`;
    // const req = `https://www.omdbapi.com/?${Qs.stringify({ apikey: 'd3881b2d', i: props.movie })}`;
    return (
      <div className='mov-child'>
        {this.getMovieInfo(this)}
        <img src={this.state.src} onMouseEnter={this.dimPoster} onMouseLeave={this.resetPoster} onClick={this.props.modal.bind(this, this.state.src, this.state.title, this.state.director, this.state.imdb, this.state.plot)} alt={this.state.title}/>
      </div>
    );
  }
}
export default Movie;
