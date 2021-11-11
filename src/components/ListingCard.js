import React from "react";
import { useState } from "react";

function ListingCard({ item, handleDelete }) {

  const [isLiked, setIsLiked] = useState(false)

  function handleLikeClick (){
    setIsLiked(!isLiked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleLikeClick} style={{fontSize: 'Large'}}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikeClick} style={{fontSize: 'Large'}}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(item.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
