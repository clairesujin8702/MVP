import React from 'react';

export default function BorrowList ({ borrowHistory }) {
  const borrowList = !borrowHistory ? null : borrowHistory.map((borrower, i)=>{
    return (<li> You have to pay {borrower.money} to {borrower.name} from {borrower.place}_ {borrower.date} </li>);
  });

  return (
    <div>
      <h2>Pay Back Now</h2>
      <p> Who are you for paying for?</p>
      <ol className="borrowList">
        {borrowList}
      </ol>
    </div>
  );
}