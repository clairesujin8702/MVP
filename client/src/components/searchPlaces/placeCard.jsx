import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PlaceCard(
  { place,
    postPlace,
    comment,
    view,
    handleClickChange,
    momHandleClickChange }) {

  let SplitBillButton = view === 'new' &&
      <><button name='newBillPlace' value={place.name}
        onClick={(e) => momHandleClickChange(e)}>
      Split-bill
      </button><br /></>;
  return (
    <div className="sCard">
      <img className="sCard--image"
        src={place.image_url}
        alt={place.name}
        name='newBillPlace'
        onClick={(e) => momHandleClickChange(e, place.name)}
      />
      <div className="card--content">

        <span className="sCard--title"
          name='newBillPlace'>{place.name}
        </span>&nbsp;&nbsp;&nbsp;
<br />
        <button name='favorites'
          onClick={(e) => postPlace(e, place)}>
          Favorite
        </button> &nbsp;
        <button name='wishList'
          onClick={(e) => postPlace(e, place)}>
          Wish list
        </button>&nbsp;
        {SplitBillButton}

        <div>
          <small>{place.categories[0].title}, for more details, visit <a href={place.url}>website</a> on Yelp</small>

          <p><b><small>RATING: {place.rating}, PRICE: {place.price}</small></b></p>

          <p>{place.location.display_address[0]},
            {place.location.display_address[1]},
            {place.location.display_address[2]}<br />
            {place.display_phone}</p>
          <textarea rows="3" cols="52"
            placeholder="Leave comments for your favorite and wish list"
            name="comment"
            // value={comment}
            onChange={(e) => handleClickChange(e)}
          ></textarea>
        </div>

      </div>
    </div>
  );
}