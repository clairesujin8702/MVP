import React from 'react';

export default function Favorite({ favorites, changeView, deleteData }) {
  let favoriteCard = favorites.map( favorite => {
    return (
      <div className="responsive" key={'F' + favorite.id}>
        <div className="gallery">
          <img src={favorite.image_url} alt={favorite.name} width="25%"/>
          <div className="desc">
            <small>
              <div className="right">
                <div className="blueLink" onClick={()=>deleteData(favorite.id, 'favorites')}>delete</div>
              </div>
              <b>{favorite.name}</b><br />
              {favorite.location.display_address[0]}
              {favorite.location.display_address[1]}
              {favorite.location.display_address[2]}<br />
              {favorite.display_phone}
            </small><br /><br />
            {favorite.comment}
          </div>
        </div>
      </div>);
  });
  return (
    <div>
      <div className='photos_title' onClick={()=> changeView('search') }>&raquo; ADD MORE</div>
      <div className="wishlistContainer">
        {favoriteCard}
      </div>
    </div>
  );
}