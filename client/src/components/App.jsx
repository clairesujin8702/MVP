import React from 'react';
import axios from 'axios';
import Payment from './payment/payment.jsx';
import RentList from './payment/rentList.jsx';
import BorrowList from './payment/borrowList.jsx';
import TotalSummary from './payment/totalSummary.jsx';
import NewBill from './payment/newBill.jsx';
import FindPlaces from './searchPlaces/findPlaces.jsx';

import Favorite from './favorite.jsx';
import WishList from './wishList.jsx';
import Login from './login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      view: 'home',
      favorites: [],
      wishList: [],
      rentHistory: [
        {name: 'Susu', money: 300, place: 'Yumpling', date: '2021-01-20'}, {name: 'Claire', money: 50, place: 'Yumpling', date: '2021-01-30'}
      ],
      borrowHistory: [
        {name: 'Susu', money: 300, place: 'Yumpling', date: '2021-01-20'}, {name: 'Claire', money: 50, place: 'Yumpling', date: '2021-01-30'}
      ]
    };
    this.changeView = this.changeView.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.getPlaces = this.getPlaces.bind(this);
    // this.handleClickChange = this.handleClickChange(this);
  }

  componentDidMount() {
    this.getPlaces();
  }

  getPlaces(data) {
    axios.get('/main/favorites', { params: { name: data } })
      .then(res => {
        console.log('res_favorites:', res.data);

        this.setState({ favorites: res.data });
        // console.log('this.state.favorites', this.state.favorites);
      })
      .catch(err => console.log(err));
    axios.get('/main/wishList', { params: { name: data } })
      .then(res => {
        console.log('res_wishList:', res.data);
        this.setState({ wishList: res.data });
        // console.log('this.state.wishes', this.state.wishList);
      })
      .catch(err => console.log(err));
  }

  postData(data) {
    // let info = {};
    // axios.post('/payment', info)
    //   .then(()=> this.getData() )
    //   .catch(err=> console.log(err) );
  }

  updateData(name) {
    // let info = {};
    // axios.put(`/payment/${name}`, info)
    //   .then(()=>this.getData())
    //   .catch(err=>console.log(err));
  }

  deleteData( id, kind ) {
    console.log('deleteData:', id, kind);

    axios.delete(`/main/${kind}/${id}`)
      .then(()=> this.getPlaces() )
      .catch(err => console.log(err) );
  }

  changeView(viewName) {
    console.log(viewName);
    this.setState({
      view: viewName,
    });
  }

  // handleClickChange(e) {
  //   let { name, value } = e.target;
  //   console.log('handleClickChange in newBill :', name, value);
  //   this.setState({ [name]: value });
  // }

  render() {

    let paymentView = '';
    // conditional rendering
    if (this.state.view === 'rent') {
      paymentView = <RentList rentHistory={this.state.rentHistory} />;
    } else if (this.state.view === 'borrow') {
      paymentView = <BorrowList borrowHistory={this.state.borrowHistory} />;
    } else if (this.state.view === 'new') {
      paymentView = <NewBill />;
    } else if (this.state.view === 'pay') {
      paymentView = <><TotalSummary /><br />
        <Payment changeView={this.changeView} /></>;
    } else if (this.state.view === 'favorite') {
      paymentView = <Favorite
        favorites={this.state.favorites}
        changeView={this.changeView}
        deleteData={this.deleteData}/>;
    } else if (this.state.view === 'wish') {
      paymentView = <WishList
        wishList={this.state.wishList}
        changeView={this.changeView}
        deleteData={this.deleteData}/>;
    } else if (this.state.view === 'login') {
      paymentView = <Login />;
    } else if (this.state.view === 'search') {
      paymentView = <FindPlaces />;
    }

    return (
      <>
        <div className="header">
          <h1>SPLIT BILL APP</h1>
          <p>hang out <b>more</b> but life <b>simpler</b> </p>
        </div>
        <div className="navbar">
          <a href="#" className="active" onClick={() => {
            this.changeView('home');
            this.getPlaces();
          } }>HOME</a>
          <a href="#" onClick={() => this.changeView('pay')}>PAYMENT</a>
          <a href="#" onClick={() => this.changeView('favorite')}>FAVORITE</a>
          <a href="#" onClick={() => this.changeView('wish')}>WISH</a>
          <a href="#" className="right" onClick={() => this.changeView('login')} >LOGIN</a>
        </div>

        { paymentView}
        { this.state.view !== 'home' ? null : <>
          <div className="main_container">
            <div>
              <h2 className="title">CURRENT STATUS</h2>
              <Payment changeView={this.changeView} />
            </div>
            <div>
              <div className="title">FAVORITE PLACES</div>
              <Favorite
                favorites={this.state.favorites}
                changeView={this.changeView}
                deleteData={this.deleteData}/>
            </div>
            <hr />
            <div>
              <div className="title">WISH LIST</div>
              <WishList
                wishList={this.state.wishList}
                changeView={this.changeView}
                deleteData={this.deleteData}/>
            </div>
          </div></>
        }

        <div className="footer"><i>
          <small>All profit will be donated to Claire's FOOD FUND</small><br />
          <span>SUSU INC.</span></i>
        </div>
      </>
    );
  }
}

export default App;

