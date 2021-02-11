import React from 'react';

export default function BorrowList ({ borrowHistory }) {
  const borrowList = !borrowHistory ? null : borrowHistory.map((borrower, i)=>{
    return (<li>
      You owe {borrower.name} $ {borrower.money}__Paid :<input type ='checkbox' checked="true"/> <br />
      Location : {borrower.place}, Date : {borrower.date}<br />
      <span className="blueLink">Delete</span>, <span className="blueLink">Detail</span>
    </li>);
  });

  return (
    <div className='borrowContainer'>
      <h3>Pay Back</h3>
      <p> Who are you for paying for?</p>
      <ol className="borrowList">
        {borrowList}
      </ol>
    </div>
  );
}