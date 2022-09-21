import React from "react";
import './card.styles.css'

/**
 * 
 * @param {*} props property of a card
 * @returns 
 */
export const Card = (props) => (
  <div className='card-container'>
    <img alt='card' src={`https://robohash.org/${props.card.id}?set=set2&size =15x15`} />
    <h2>{props.card.username}</h2>
    <p>{props.card.address.city}</p>
    <p>{props.card.phone}</p>
    <p>{props.card.zipcode}</p>
  </div>
);
