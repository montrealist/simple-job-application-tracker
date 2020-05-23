import React from 'react';
import {
    Link
} from "react-router-dom";

export default function Header(props) {
    const entries = props.entries;

    return (
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked db dt-l w-100 border-box">
                <Link className="link dim white dib mr3" to="/">List</Link>
                <Link className="link dim white dib mr3" to="/add">Add Item</Link>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <Link className={"link tr-l dim dib mr3 " + (entries && entries.length ? 'mid-gray' : 'white')} to="/seed">Seed some list entries</Link>
                </div>
            </nav>
        </header>
    );
}