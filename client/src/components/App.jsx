import React from 'react';
import axios from 'axios';
import Payment from './payment.jsx';
import Favorite from './favorite.jsx';
import WishList from './wishList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      favoriteList: [],
      wishList: [],
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    // this.getData();
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

  changeView( viewName ) {
    console.log(viewName);
    this.setState({
      view: viewName,
    });
    // this.renderView();
  }

  render() {

    let paymentView = '';

    if (this.state.view === 'rent') {
      return paymentView = (<RentList rentHistory={this.state.rentHistory} />);

    } else if ( this.state.view === 'borrow' ) {
      return paymentView = (<BorrowList borrowHistory={ this.state.borrowHistory }/>);

    } else if ( this.state.view === 'search' ) {
      return paymentView = (<FindPlaces />);

    } else if ( this.state.view === 'pay' ) {
      paymentView = (<Payment />);

    } else if ( this.state.view === 'favorite' ) {
      paymentView = (<Favorite />);

    } else if ( this.state.view === 'wish' ) {
      paymentView = (<WishList />);

    } else if (this.state.view === 'home') {
      paymentView = <>
        <div className="pContainer">
          <h2 className="title">CURRENT STATUS</h2>
          <Payment />
        </div>
        <div className="fContainer">
          <h2 className="title">FAVORITE PLACES</h2>
          <h3 className ="placeHolder">
            <Favorite favoriteList={this.state.favoriteList} />
          </h3>
        </div>
        <div className="wContainer">
          <h2 className="title">WISH LIST</h2>
          <h3 className ="placeHolder">
            <WishList favoriteList={this.state.wishList} />
          </h3>
        </div>
      </>;
    }

    return (
      <>
        <div className="header">
          <h1>SPLIT BILL APP</h1>
          <p>hang out <b>more</b> but life <b>simpler</b> </p>
        </div>
        <div className="navbar">
          <a href="#" className="active" onClick={()=>this.changeView('home') }>HOME</a>
          <a href="#"onClick={()=>this.changeView('pay')}>PAYMENT</a>
          <a href="#" onClick={()=>this.changeView('favorite')}>FAVORITE</a>
          <a href="#" onClick={()=>this.changeView('wish')}>WISH</a>
          <a href="#" className="right" onClick={()=>this.changeView('login') } >LOGIN</a>
        </div>

        { paymentView }

        <div className="footer">
          <i><span>SUSU INC.</span><br />
            <small>all profit will be donated to Claire Sujin Kim</small>
          </i>
        </div>
      </>
    );
  }
}

export default App;

