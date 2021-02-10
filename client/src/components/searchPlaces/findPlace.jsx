import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FindPlaces() {

  const [query, setQuery] = useState('');
  const [places, setplaces] = useState([]);

  // React.useEffect(()=>{}, []);

  const placeSearch = ( query )=>{

    axios.get('/search', {params: { term: query }})
      .then( res=> { setplaces( res.data ); } )
      .catch( err=> console.log(err) );

  };

  return (
    <div className="sContainer">
      <form className="sForm" onSubmit={placeSearch}>
        <label className="sLabel" htmlFor="query">Place Name</label>
        <input className="sInput" type="text" name="query"
          placeholder="e.g. Pink Lash"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="sButton" type="submit">Search</button>
      </form>
      <div className="sCard-list">
        {places.map((place, i)=> (
          <PlaceCard key={i} place={place} />
        ))}
      </div>
    </div>
  );
}
