import React from 'react';

export default function WishList({ wishList, changeView, deleteData, updateData, view }) {
  let wishListCard = wishList.map( wish => {
    return (
      <div className="responsive" key={'W' + wish.id}>
        <div className="gallery">
          <img src={wish.image_url} alt={wish.name} width="25%"/>
          <div className="desc">
            <small>
              <div className="right">
                <span className="blueLink"
                  onClick={()=>{
                    updateData(wish.id, 'favorites', wish),
                    deleteData(wish.id, 'wishList');
                  }}>
                    favorite</span>&nbsp;&nbsp;
                <span className="blueLink"
                  onClick={()=>deleteData(wish.id, 'wishList')}>
                    delete</span>
              </div>
              <b>{wish.name}</b><br />
              {wish.location.display_address[0]}
              {wish.location.display_address[1]}
              {wish.location.display_address[2]}<br />
              {wish.display_phone}
            </small><br /><br />
            <div className="commnetText">{wish.comment}</div>
          </div>
        </div>
      </div>);
  });

  let addMore = view === 'home' && <div className='photos_title' onClick={()=> changeView('search') }>&raquo; ADD MORE</div>;
  return (
    <div>
      {addMore}
      <div className="wishlistContainer">
        {wishListCard}
      </div>
    </div>
  );
}