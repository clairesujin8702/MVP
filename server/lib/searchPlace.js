const axios = require('axios');
const { CLIENT_ID, API_KEY } = require('../../env/config.js');
const apiKey = API_KEY || process.env.API_KEY;
const clientId = CLIENT_ID || process.env.CLIENT_ID;

// { "businesses": [
//        {
//            "id": "iJO2QE6Kort3pWpYzhiipw",
//            "alias": "jj-eyelashes-midtown-new-york",
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
//            "transactions": [],
//            "price": "$$$",
//            "location": {
//                "address1": "56 W 56th St",
//                "address2": "2nd Fl",
//                "address3": "",
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
//            "phone": "+12122442921",
//            "display_phone": "(212) 244-2921",
//            "distance": 6585.090947188394
//        },
//        {
//            "id": "96rtWF6RLE4yNMSETXmxdg",
//            "alias": "envious-lashes-new-york-4",
//            "name": "Envious Lashes",
//            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/5CQWX3pNr_ZzvEZc_u0qew/o.jpg",
//            "is_closed": false,
//            "url": "https://www.yelp.com/biz/envious-lashes-new-york-4?adjust_creative=27edtF-e9P4UROpiWw8-EA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=27edtF-e9P4UROpiWw8-EA",
//            "review_count": 52,
//            "categories": [
//                {
//                    "alias": "eyelashservice",
//                    "title": "Eyelash Service"
//                }
//            ],
//            "rating": 4.0,
//            "coordinates": {
//                "latitude": 40.7529708,
//                "longitude": -73.9801221
//            },
//            "transactions": [],
//            "price": "$$$",
//            "location": {
//                "address1": "20 E 42nd St",
//                "address2": "Fl 2",
//                "address3": "",
//                "city": "New York",
//                "zip_code": "10017",
//                "country": "US",
//                "state": "NY",
//                "display_address": [
//                    "20 E 42nd St",
//                    "Fl 2",
//                    "New York, NY 10017"
//                ]
//            },
//            "phone": "+16463978877",
//            "display_phone": "(646) 397-8877",
//            "distance": 5417.867258811048
//        }
//    ],
//    "total": 33,
//    "region": {
//        "center": {
//            "longitude": -73.99429321289062,
//            "latitude": 40.70544486444615
//        }
//    }
// }
//    /search?term=pink lash&limit=2&sort_by=best_match&price=3,4&location=New York

//  sort_by : best_match, rating, review_count or distance

let searchPlace = ( placeName, area, num, sort, priceLevel ) => {
  console.log('searched place, limit, sortBy, $$ :', placeName, area, num, sort, priceLevel );

  let yelpREST = axios.create({
    type: 'GET',
    baseURL: 'https://api.yelp.com/v3',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-type': 'application/json',
    },
  });

  return yelpREST('/businesses/search', { params: {term: placeName, location: area, limit: num, sort_by: sort, price: priceLevel } })
    .then(res => {
      console.log('res in search Placer_data:', res.data);
      console.log('res in search Placer_businesses:', res.businesses);
      return res.data;
    })
    .catch(err=> console.error(err));
};

module.exports.searchPlace = searchPlace;