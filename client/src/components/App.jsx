import React from 'react';
import axios from 'axios';
import Payment from './payment.jsx';
import Favorite from './favorite.jsx';
import WishList from './wishList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData(data) {
    axios.get('/search', {params: { name: data }})
      .then(res=> {
        this.setState({ list: res.data });
        console.log('this.state.list', this.state.list);
      } )
      .catch(err=> console.log(err) );
  }

  postData(data) {
    let info = {};
    axios.post('/payment', info)
      .then(()=> this.getData() )
      .catch(err=> console.log(err) );
  }

  updateData(name) {
    let info = {};
    axios.put(`/payment/${name}`, info)
      .then(()=>this.getData())
      .catch(err=>console.log(err));
  }

  deleteData(name) {
    let info = {};
    axios.delete(`/Payment/${name}`, info)
      .then(()=> this.getData() )
      .catch(err => console.log(err) );
  }

  render() {
    return (
      <div className="container">
        <div className="pContainer">
          <h1 className="title">Current Status</h1>
          <Payment />
        </div>
        <div className="fContainer">
          <h1 className="title">Favorite Places</h1>
          <Favorite />
        </div>
        <div className="wContainer">
          <h1 className="title">Wish List</h1>
          <WishList />
        </div>
      </div>
    );
  }
}

export default App;

