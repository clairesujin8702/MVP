import React from 'react';

export default function BorrowList ({ borrowHistory }) {
  const borrowList = !borrowHistory ? null : borrowHistory.map((borrower, i)=>{
    return (<><li className="title_temp"><b>
      You owe {borrower.name} $ {borrower.money}</b>__Paid :<input type ='checkbox' checked="true"/> <br />
      Location : {borrower.place}, Date : {borrower.date}<br />
      <span className="blueLink">Delete</span>, <span className="blueLink">Detail</span>
    </li><br /></>);
  });

  return (
    <div className='borrowContainer'>
      <h2>Pay Back</h2>
      <p className="sLabel"> <b>Who are you for paying for?</b></p>
      <ol className="borrowList">
        {borrowList}
      </ol>
    </div>
  );
}