import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PlaceCard({ place, postPlace, momHandleClickChange }) {
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
        </span><br />

        <button name='favoritePlaces'
          onClick={(e) => postPlace(e, place)}>
          Favorite
        </button>
        <button name='wishList'
          onClick={(e) => postPlace(e, place)}>
          Wish list
        </button>
        <button name='newBillPlace' value={place.name}
          onClick={(e) => momHandleClickChange(e)}>
          Split-bill
        </button><br />

        <div>
          <small>{place.categories[0].title}, for more details, visit <a href={place.url}>website</a></small>

          <p><b><small>RATING: {place.rating}, PRICE: {place.price}</small></b></p>

          <p>{place.location.display_address[0]},
            {place.location.display_address[1]},
            {place.location.display_address[2]}<br />
            {place.display_phone}</p>
        </div>

      </div>
    </div>
  );
}

//        {
//            "id": "iJO2QE6Kort3pWpYzhiipw",
//            "name": "JJ Eyelashes - Midtown",
//            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/tmhYS4XQYQPRVE5BfUZ_aQ/o.jpg",
//            "is_closed": false,
//            "url": "https://www.yelp.com/biz/jj-eyelashes-midtown-new-york?adjust_creative=27edtF-e9P4UROpiWw8-EA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=27edtF-e9P4UROpiWw8-EA",
//            "review_count": 344,
//            "categories": [
//                {
//                    "alias": "makeupartists",
//                    "title": "Makeup Artists"
//                },
//                {
//                    "alias": "eyelashservice",
//                    "title": "Eyelash Service"
//                },
//                {
//                    "alias": "permanentmakeup",
//                    "title": "Permanent Makeup"
//                }
//            ],
//            "rating": 4.0,
//            "coordinates": {
//                "latitude": 40.763205,
//                "longitude": -73.9770399
//            },
//            "price": "$$$",
//            "location": {
//                "address1": "56 W 56th St",
//                "address2": "2nd Fl",
//                "city": "New York",
//                "zip_code": "10019",
//                "country": "US",
//                "state": "NY",
//                "display_address": [
//                    "56 W 56th St",
//                    "2nd Fl",
//                    "New York, NY 10019"
//                ]
//            },
//            "display_phone": "(212) 244-2921",
//            "distance": 6585.090947188394
//        }