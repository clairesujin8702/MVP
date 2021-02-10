import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PlaceCard({place}) {
  return (
    <div className="sCard">
      <img className="sCard--image"
        src={'https://www.quackit.com/pix/samples/15l.jpg'}
        alt={place.name}
      />
      <div className="card--content">
        <h3 className="sCard--title">{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}