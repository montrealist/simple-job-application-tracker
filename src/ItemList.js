import React from 'react';

export default function ItemList(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.onDelete(e.target.dataset.id);
      };
    return (
        <ul className="f3 list pl0 mt0 measure-wide-ns center">
            {
                props.items.map(item =>
                    <li key={item.id} id={'item-' + item.id} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div className="pl3 flex-auto">
                            <span className="f5 db black-70">{item.company}</span>
                            <span className="f4 db black-70">{item.jobDescriptionUrl}</span>
                            <span className="f5 db black-70">{item.notes}</span>
                        </div>
                        <div>
                            <a className="f6" href="#" data-id={item.id} onClick={handleClick}>delete</a>
                        </div>
                    </li>
                )
            }
        </ul>
    )
};