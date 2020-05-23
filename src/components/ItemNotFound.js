import React from 'react';
import {
  Link
} from "react-router-dom";

export default function ItemNotFound({ id, link }) {
  let moreMessage = '';
  if (link) {
    moreMessage = <span>You can <Link to={link}>add a new item</Link>.</span>
  }

  return (<div className="f3 pl0 mt0 measure-wide-ns center"><p>Item {
    id ? (`with ID ${id}`) : ''
  } not found, sorry. {moreMessage} </p></div>)
}