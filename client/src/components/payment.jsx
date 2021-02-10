import React from 'react';
import RentList from './payment/RentList.jsx';
import BorrowList from './payment/BorrowList.jsx';

import FindPlaces from './FindPlace.jsx';

class payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      rentHistory: [],
      borrowHistory: []
    };
  }

  componentDidMount() {
    // this.getHistory();
  }

  getHistory() {
  }

  changeView( viewName ) {
    console.log(viewName);
    this.setState({
      view: viewName,
    });
    // this.renderView();
  }

  handleClickChange( e ) {

  }

  render() {
    const myStyle = { width: '100%' };

    return (
      <>
        <div className="row1">

          <div className="column">
            <div className="pCard">
              <img src="https://www.quackit.com/pix/samples/15l.jpg" alt="Jane" style={myStyle} />
              <div className="container">
                <h2>GET</h2>
                <p><button className="button" onClick={()=>this.changeView('rent') }> Get rich </button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="pCard">
              <img src="https://www.quackit.com/pix/samples/16l.jpg" alt="Mike" style={myStyle} />
              <div className="container">
                <h2>PAY</h2>
                <p><button className="button" onClick={()=>this.changeView('borrow') }> No more debt </button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="pCard">
              <img src="https://www.quackit.com/pix/samples/30m.jpg" alt="John" style={myStyle} />
              <div className="container">
                <h2>ADD</h2>
                <p><button className="button" onClick={()=>this.changeView('search') }> Let's Calculate </button></p>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default payment;