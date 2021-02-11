import React from 'react';
import FindPlaces from '../searchPlaces/findPlaces.jsx';
import { food, drink, share, tax, tip } from './splitMath.js';

class NewBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBillPlace: '',
      emailTo: 'test@gmail.com, yayy@gmail.com, food@gmail.com',
      emailTitle: 'Bill-split',
      emailContent: 'Total at PLACE was $ PRICE ( paid by NAME ).%0A%0A Yor owe NAME $ MONEY now.%0A%0A Please settle up with NAME( PHONE NUMBER ) Venmo id: 12345.%0A%0AHave a nice day :)%0A%0A %0A%0APowered by Split-Bill-App',
      payer: [
        { name: 'Claire', venmoId: 'secureVenmoId', email: 'makemoney@gmail.com', phone: '000-000-0000', totalPay: 150, totalGetBack: 100 }
      ],
      participant: [
        { name: 'A-friend', borrow: 50, email: 'nonono@gmail.com', phone: '000-000-0000' }, { name: 'B-friend', borrow: 50, email: 'nonono@gmail.com', phone: '000-000-0000' }
      ],
    };
    this.handleClickChange = this.handleClickChange.bind(this);
    this.addPplInvolved = this.addPplInvolved(this);
  }

  addPplInvolved(borrower, renter) {
    let newPayer = this.state.payer.slice();
    let newParticipant = this.state.participant.slice();
    if (renter) {
      //     newPayer.push({
      //       name: renter.name,
      //       venmoId: renter.venmoId,
      //       email: renter.email,
      //       phone: renter.phone,
      //       totalPay: renter.totalPay,
      //       totalGetBack: renter.totalGetBack
      //     });
      this.setState({ payer: newPayer });
    } else {
      //     newParticipant.push({
      //       name: borrower.name,
      //       email: renter.email,
      //       phone: borrower.phone,
      //       borrow: renter.totalPay,
      //     });
      this.setState({ participant: newParticipant });
    }
  }

  handleClickChange(e) {
    let { name, value } = e.target;
    console.log('handleClickChange in newBill :', name, value);
    this.setState({ [name]: value });
  }

  render() {
    let searchBar = !this.state.newBillPlace && <>
      <h2>SEARCH PLACE</h2>
      <FindPlaces momHandleClickChange={this.handleClickChange} /></>;
    let manualBar = this.state.newBillPlace ? this.state.newBillPlace : 'Type a location to split new bill';
    return (
      <div className='sContainer'>
        { searchBar}
        <h2>SPLIT-BILL</h2>
        <label className="sLabel">Place Name</label>
        <input
          name="newBillPlace"
          placeholder={manualBar}
          onChange={(e) => this.handleClickChange(e)}
          size="67" />
        <h3>New bill from {this.state.newBillPlace} added</h3>
        <p><a href={`mailto:${this.state.emailTo}?subject=${this.state.emailTitle}%20from%20${this.state.newBillPlace}&body=${this.state.emailContent}%`}>Send email</a></p>
      </div>
    );
  }
}

export default NewBill;