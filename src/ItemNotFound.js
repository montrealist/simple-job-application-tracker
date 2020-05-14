import React from 'react';
import {
    Link
  } from "react-router-dom";

export default function ItemNotFound(props) {
    return (<div className="f3 pl0 mt0 measure-wide-ns center"><p>Item {
        props.id ? (`with ID ${props.id}`) : ''
        } not found, sorry. You can  <Link to={"/edit"}>add a new item</Link>.</p></div>)
}