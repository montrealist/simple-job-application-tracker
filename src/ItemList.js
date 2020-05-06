import React from 'react';

export default function ItemList(props) {
    return (
        props.items.map(item =>
        <li key={item.id}>{item.company} - {item.jobDescriptionUrl}</li>
        ));
};