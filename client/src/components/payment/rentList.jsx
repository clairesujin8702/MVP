import React from 'react';

export default function RentList({ rentHistory }) {
  const rentList = !rentHistory ? null : rentHistory.map((renter, i) => {
    return (<><li className="title_temp"><b>
      {renter.name} owes $ {renter.money}</b>__Paid :<input type='checkbox' checked="true" /> <br />
      Location : {renter.place}, Date : {renter.date}<br />
    <span className="blueLink">Delete</span>, <span className="blueLink">Detail</span> </li><br /></>);
  });

  return (
    <div className='rentContainer'>
      <h2>Get money back</h2>
      <p className="sLabel"> <b>Who owes me and how much?</b> </p>
      <ol className="rentList">
        {rentList}
      </ol>
    </div>
  );
}