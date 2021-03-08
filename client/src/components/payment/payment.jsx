import React from 'react';

export default function Payment({changeView}) {

  const myStyle = { width: '100%' };
  return (
    <>
      <div className="row1">

        <div className="column">
          <div className="pCard">
            <img src="https://www.quackit.com/pix/samples/30m.jpg" alt="John" style={myStyle} />
            <div className="container">
              <h2>ADD </h2>
              <p><button className="button" onClick={()=>changeView('new') }> Let's do some math </button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="pCard">
            <img src="https://www.quackit.com/pix/samples/15l.jpg" alt="Jane" style={myStyle} />
            <div className="container">
              <h2>GET &#36;&#36;&#36;</h2>
              <p><button className="button" onClick={()=>changeView('rent') }> Get rich </button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="pCard">
            <img src="https://www.quackit.com/pix/samples/16l.jpg" alt="Mike" style={myStyle} />
            <div className="container">
              <h2>PAY &#36;&#36;&#36;</h2>
              <p><button className="button" onClick={()=>changeView('borrow') }> No more debt </button></p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
