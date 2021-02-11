import React from 'react';

export default function WishList({ wishList, changeView, deleteData }) {
  let wishListCard = wishList.map( wish => {
    return (
      <div className="responsive" key={'W' + wish.id}>
        <div className="gallery">
          <img src={wish.image_url} alt={wish.name} width="25%"/>
          <div className="desc">
            <small>
              <div className="right">
                <div className="blueLink" onClick={()=>deleteData(wish.id, 'wishList')}>delete</div>
              </div>
              <b>{wish.name}</b><br />
              {wish.location.display_address[0]}
              {wish.location.display_address[1]}
              {wish.location.display_address[2]}<br />
              {wish.display_phone}
            </small><br /><br />
            {wish.comment}
          </div>
        </div>
      </div>);
  });
  return (
    <div>
      <div className='photos_title' onClick={()=> changeView('search') }>&raquo; ADD MORE</div>
      <div className="wishlistContainer">
        {wishListCard}
      </div>
    </div>
  );
}