import React from 'react';

export default function TotalSummary () {
  return (<div className='totalContainer'>
    <h2> Total Summary </h2>

    <h4>Total amount_ getting back : $2000</h4>
    * List who owe you *<br />
    <b>1. Name :  $100 _from Place_ data  / info : phone#, email<br />
      2. Name :  $450 _from Place_ data  / info : phone#, email<br />
      3. Name : $1450 _from Place_ data  / info : phone#, email<br /><br /></b>
    <h4>Total amount_ paying back : $100 </h4>
    * List you owe *<br />
    <b>1. Name :  $20 _from Place_ data  / info : phone#, email<br />
      2.  Name :  $80 _from Place_ data  / info : phone#, email<br /></b>
<br /><br />
  </div>);
}