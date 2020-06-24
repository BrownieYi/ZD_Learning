/* eslint-disable import/no-named-as-default */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import MovieGallery from './MovieGallery';

const movies = require('../movies.json');
/* global document */

export class Movies extends Component {
  modal = (imgSrc, title, director, rating, plot) => {
    document.body.style.overflow = 'hidden';
    const md = document.createElement('img');
    md.className = 'md-content';
    md.src = imgSrc;
    md.id = 'md';
    const mdInfo = document.createElement('div');
    mdInfo.className = 'info';
    mdInfo.id = 'mdInfo';
    mdInfo.innerHTML = `<span class='title'>${title}</span><br/><span class='director'>${director}</span><br/><br/><span class='rating'>IMDb Rating: ${rating}</span><p>${plot}</p>`;
    const mdMovie = document.createElement('div');
    mdMovie.id = 'mdMovie';
    mdMovie.className = 'md-container';
    const mdl = document.createElement('div');
    mdl.id = 'm';
    mdl.className = 'md';
    document.body.appendChild(mdl);
    document.getElementById('m').appendChild(mdMovie);
    document.getElementById('mdMovie').appendChild(md);
    document.getElementById('mdMovie').appendChild(mdInfo);
    document.getElementById('m').addEventListener('click', (event) => {
      if (event.target.className === 'md') {
        document.getElementById('m').removeChild(document.getElementById('mdMovie'));
        document.body.removeChild(document.getElementById('m'));
        document.body.style.overflow = 'auto';
      }
    });
  }

  getId = () => {
    const movieList = [];
    for (const movie of movies) {
      movieList.push(movie.id);
    }
    return movieList;
  }

  componentDidMount() {
    const scrollComponent = this;
    document.addEventListener('scroll', () => {
      scrollComponent.scrollFunction();
    });
  }

  scrollFunction = () => {
    const topbutton = document.getElementById('topBut');
    if (document.documentElement.scrollTop > document.documentElement.clientHeight / 4) {
      topbutton.style.display = 'block';
    } else {
      topbutton.style.display = 'none';
    }
  }

  topFunction = () => {
    document.documentElement.scrollTop = 0;
  }

  render() {
    const movieList = this.getId();
    return (
      <div>
        <button onClick={this.topFunction} id="topBut" title="Go up">Top</button>
        <div className='content'>
          <div className='mov-container'>
            <MovieGallery movieList={movieList} modal={this.modal} />
          </div>
        </div>
      </div>
    );
  }
}
export default Movies;
