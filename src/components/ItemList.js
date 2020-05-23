import React from 'react';
import {
    Link
  } from "react-router-dom";
  
export default function ItemList({ items = [], onDelete }) {
    const handleDelete = (e) => {
        e.preventDefault();
        onDelete
        ? onDelete(e.target.dataset.id)
        : console.warn("onDelete is not in props!");
    };

    return (
        <ul className="f3 list pl0 mt0 measure-wide-ns center">
            {
                items.length ? items.map(item =>
                    <li key={item.id} id={'item-' + item.id} className="flex items-center lh-title pa3 ph0-l bb b--black-10">
                        <div className="pl3 flex-auto">
                            <span className="f5 db black-70">{item.company}</span>
                            <span className="f4 db black-70">{item.position}</span>
                            <span className="f5 db black-70">{item.notes}</span>
                        </div>
                        <div className="flex flex-column">
                            <Link className="w4 f5 tc link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib navy" to={"/edit/" + item.id}>edit</Link>
                            <button className="w4 f5 link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib dark-pink" data-id={item.id} onClick={handleDelete}>delete</button>
                        </div>
                    </li>
                ) : <p>No items to display.</p>
            }
        </ul>
    )
};