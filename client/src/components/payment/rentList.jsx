import React from 'react';

export default function RentList ( {list, rentHistory} ) {
  const rentList = !rentHistory ? null : rentHistory.map((renter, i)=>{
    return (<li> {renter.name} owes $ {renter.money} from {renter.place}_ {renter.date} </li>);
  });

  return (
    <div className='rentContainer'>
      <h3>Get money back</h3>
      <p> Who owes me and how much? </p>
      <ol className="rentList">
        {rentList}
        1. 'Test' owes you $ '5.00' from 'PLACE' _ 'DATE'   : √  detail delete
        2. 'OK' owes you $ '100.00' from 'PLACE' _ 'DATE'   : √  detail delete
      </ol>
    </div>
  );
}