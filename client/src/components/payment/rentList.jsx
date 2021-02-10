import React from 'react';

export default function RentList ( {rentHistory} ) {
  const rentList = !rentHistory ? null : rentHistory.map((renter, i)=>{
    return (<li> {renter.name} have to pay {renter.money} to you from {renter.place}_ {renter.date} </li>);
  });

  return (
    <div>
      <h2>Get Money Back</h2>
      <p>Who is not paying you?</p>
      <ol className="rentList">
        {rentList}
      </ol>
    </div>
  );
}