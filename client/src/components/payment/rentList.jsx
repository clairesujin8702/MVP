import React from 'react';

export default function RentList({ rentHistory }) {
  const rentList = !rentHistory ? null : rentHistory.map((renter, i) => {
    return (<li>
      {renter.name} owes $ {renter.money}__Paid :<input type='checkbox' checked="true" /> <br />
      Location : {renter.place}, Date : {renter.date}<br />
      <span className="blueLink">Delete</span>, <span className="blueLink">Detail</span> </li>);
  });

  return (
    <div className='rentContainer'>
      <h3>Get money back</h3>
      <p> Who owes me and how much? </p>
      <ol className="rentList">
        {rentList}
      </ol>
    </div>
  );
}