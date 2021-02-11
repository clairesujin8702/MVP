import React from 'react';
import axios from 'axios';
import PlaceCard from './placeCard.jsx';

class FindPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      area: '',
      sort: '',
      comment: '',
      priceLevel: '',
      advanceSearch: false,
      places: [
        // {
        //   id: 'iJO2QE6Kosdfiipw',
        //   name: 'JJ Eyelashes - Midtown',
        //   image_url: 'https://source.unsplash.com/random/400x200',
        //   location: { 'display_address': ['56 W 56th St', '2nd Fl', 'New York, NY 10019'] },
        //   rating: '4.0',
        //   price: '$$$',
        //   display_phone: '(212) 244-2921',
        //   categories: [{ 'title': 'Makeup Artists' }],
        //   url: 'https://www.yelp.com/biz/jj-eyelashes-midtown-new-york?adjust_creative=27edtF-e9P4UROpiWw8-EA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=27edtF-e9P4UROpiWw8-EA'
        // },
        // {
        //   id: 'i12e3123',
        //   name: 'Envious Lashes',
        //   image_url: 'https://source.unsplash.com/random/400x200', location: { 'display_address': ['56 W 56th St', '2nd Fl', 'New York, NY 10019'] },
        //   rating: '4.0',
        //   price: '$$$',
        //   display_phone: '(212) 244-2921',
        //   categories: [{ 'title': 'Makeup Artists' }],
        //   url: 'http://localhost:2000/'
        // },
        // {
        //   id: 'i12e3123sdfas',
        //   name: 'random img',
        //   image_url: 'https://source.unsplash.com/random/400x200', location: { 'display_address': ['56 W 56th St', '2nd Fl', 'New York, NY 10019'] },
        //   rating: '4.0',
        //   price: '$$$',
        //   display_phone: '(212) 244-2921',
        //   categories: [{ 'title': 'Makeup Artists' }],
        //   url: 'http://localhost:2000/'
        // }
      ]
    };
    this.handleClickChange = this.handleClickChange.bind(this);
    this.postPlace = this.postPlace.bind(this);
    this.placeSearch = this.placeSearch.bind(this);
  }

  placeSearch(e) {
    e.preventDefault();
    let query = { term: this.state.query, location: this.state.area, sortBy: this.state.sort, price: this.state.priceLevel };
    console.log('placeSearch_query:', query);

    axios.get('/search', { params: query })
      .then(res => {
        console.log('placeSearch', res.data);
        this.setState({ places: res.data, advanceSearch: false});
      })
      .catch(err => console.log(err));
  }

  postPlace(e, place) {
    e.preventDefault();
    let placeInfo = e.target.name;
    place['comment'] = this.state.comment;
    console.log('place', place);

    axios.post(`/main/${placeInfo}`, place)
      .then(result => console.log(`${placeInfo}place saved`))
      .catch(err => console.log(err));
  }

  handleClickChange(e, search, fact) {
    let { name, value } = e.target;
    console.log('handleClickChange :', name, value);
    !search ? this.setState({ [name]: value }) : this.setState({ [search]: fact });
  }

  render() {
    let advancedTitle = !this.state.advanceSearch &&
    <><span className="blueLink"
      onClick={(e) => this.handleClickChange(e, 'advanceSearch', true )}>&nbsp;&nbsp;Advanced search</span><br /></>;

    let advanceSearchOption = this.state.advanceSearch &&
      <><h3> Advanced search </h3>
        <form className="sLabel" onSubmit={this.placeSearch}>
        Sort by <select
            name="sort"
            value={this.state.sort}
            onChange={this.handleClickChange}>
            <option value="">-- options --</option>
            <option value='best_match'> Best_match </option>
            <option value='rating'> Rating </option>
            <option value='review_count'> Review </option>
            <option value='distance'> distance </option>
          </select> <br /><br />
          Area&nbsp;&nbsp;&nbsp;&nbsp; <input
            name="area"
            value={this.state.area}
            placeholder="Brooklyn"
            onChange={this.handleClickChange} /><br /><br />
         Price range to <br /> <label>
            <input
              type='radio'
              name='priceLevel'
              value='1'
              checked={this.state.priceLevel === '1'}
              onChange={this.handleClickChange} /> $
            <input
              type='radio'
              name='priceLevel'
              value='1,2'
              checked={this.state.priceLevel === '1,2'}
              onChange={this.handleClickChange} /> $$
            <input
              type='radio'
              name='priceLevel'
              value='1,2,3'
              checked={this.state.priceLevel === '1,2,3'}
              onChange={this.handleClickChange} /> $$$
            <input
              type='radio'
              name='priceLevel'
              value='1,2,3,4'
              checked={this.state.priceLevel === '1,2,3,4'}
              onChange={this.handleClickChange} /> $$$$
          </label><br /><br />
        </form></>;

    return (
      <div>

        <div className="sContainer">
          <form className="sForm"
            onSubmit={(e) => this.placeSearch(e)}>
            {advanceSearchOption}
            <label className="sLabel" htmlFor="query">Place Name
              {advancedTitle}</label>
            <input className="sInput"
              type="text"
              name="query"
              placeholder="e.g. Pink Lash"
              value={this.state.query}
              onChange={(e) => this.handleClickChange(e)}
            />
            <button className="sButton" type="submit">Search</button><br />
          </form>

          <div className="sCard-list">
            {this.state.places && this.state.places.map((place, i) => (
              <PlaceCard
                key={'P' + place.id}
                place={place}
                postPlace={this.postPlace}
                comment={this.state.comment}
                handleClickChange={this.handleClickChange}
                momHandleClickChange={this.props.momHandleClickChange} />
            ))}
          </div>
        </div>

      </div>
    );
  }
}


export default FindPlaces;
//https://source.unsplash.com/random/400x200"
