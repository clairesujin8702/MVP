import React from 'react';
import FindPlaces from '../searchPlaces/findPlace.jsx';
import { food, drink, share, tax, tip } from './splitMath.js';

class NewBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'Chipotle',
      email: 'test@gmail.com, yayy@gmail.com, food@gmail.com',
      emailTitle: 'Bill-split',
      emailContent: 'Total at PLACE was $ PRICE ( paid by NAME ).%0A%0A Yor owe NAME $ MONEY now.%0A%0A Please settle up with NAME( PHONE NUMBER ) Venmo id: 12345.%0A%0AHave a nice day :)%0A%0A %0A%0APowered by Split-Bill-App',
      venmoId: '',
    };
    this.handleClickChange = this.handleClickChange.bind(this);
  }
  handleClickChange( e ) {

  }



  render() {
    return (
      <div className='newBillContainer'>
        <FindPlaces />
        <h3>new bill added</h3>
        <p><a href={`mailto:${this.state.email}?subject=${this.state.emailTitle}%20${this.state.place}&body=${this.state.emailContent}%`}>Send email</a></p>
      </div>
    );
  }
}

export default NewBill;