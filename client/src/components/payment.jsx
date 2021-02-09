import React from 'react';
import FindPlace from './FindPlace.jsx';

class payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentHistory: [],
      borrowHistory: []
    };
  }

  componentDidMount() {
    this.getHistory();
  }

  getHistory() {
  }

  render() {
    const rentList = !this.state.rentHistory ? null : this.state.rentHistory.map((renter, i)=>{
      return (<li> {renter.name} have to pay {renter.money} to you from {renter.place}_ {renter.date} </li>);
    });
    const borrowList = !this.state.borrowHistory ? null : this.state.borrowHistory.map((borrower, i)=>{
      return (<li> You have to pay {borrower.money} to {borrower.name} from {borrower.place}_ {borrower.date} </li>);
    });
    return (
      <div>
        <h2>Get Money Back</h2>
        <ol className="rentList">
          {rentList}
        </ol>
        <h2>Pay Back Now</h2>
        <ol className="borrowList">
          {borrowList}
        </ol>
        <FindPlaces />
      </div>
    );
  }
}

export default payment;