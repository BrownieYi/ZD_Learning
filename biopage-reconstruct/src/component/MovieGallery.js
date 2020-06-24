/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export class MovieGallery extends Component {
  static get propTypes() {
    return {
      movieList: PropTypes.any,
      modal: PropTypes.any,
    };
  }

  render() {
    return this.props.movieList.map((movie) => (
      <Movie key = {movie.id} movie={movie} modal={this.props.modal} />
    ));
  }
}
export default MovieGallery;
