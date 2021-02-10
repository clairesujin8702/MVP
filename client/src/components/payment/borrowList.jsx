import React from 'react';

export default function BorrowList ({ borrowHistory }) {
  const borrowList = !borrowHistory ? null : borrowHistory.map((borrower, i)=>{
    return (<li> You owe {borrower.name} $ {borrower.money} from {borrower.place}_ {borrower.date} </li>);
  });

  return (
    <div className='borrowContainer'>
      <h3>Pay Back</h3>
      <p> Who are you for paying for?</p>
      <ol className="borrowList">
        {borrowList}
        1. You owe 'FRIEND-1' $ '5.00' from 'Place' _ 'DATE'   : √  detail delete <br />
        2. You owe 'FRIEND-2' $ '20.00' from 'Place' _ 'DATE'  : √  detail delete
      </ol>
    </div>
  );
}