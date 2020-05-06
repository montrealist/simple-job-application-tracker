import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import db from './db';
import AddItem from './AddItem';
import ItemList from './ItemList';

const tableName = 'applications';

const initState = {
    applications: []
};
function App() {
    const [state, setState] = useState(initState);
    useEffect(() => {
        db.table(tableName)
            .toArray()
            .then((applications) => {
                console.log('got applications from db: ', applications);
                setState({ applications });
            });
    }, []);

    const onAddItem = (item) => {
        console.log('onAddItem ran', item);
    }
    const onDeleteItem = (id) => {
        const idToDelete = parseInt(id, 10);
        db.table(tableName)
        .delete(idToDelete)
        .then(() => {
          const newList = state.applications.filter((item) => item.id !== idToDelete);
          setState({ applications: newList });
        });
    };

    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/add">Add Item</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add">
            <AddItem onAdd={onAddItem} />
          </Route>
          <Route path="/">
            <ItemList onDelete={onDeleteItem} items={state.applications} />
          </Route>
        </Switch>
      </div>
    </Router>

// <div className="App">
//             <header className="App-header">
//                 <ul className="list pl0 mt0 measure center">
//                     <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
//                         <div className="pl3 flex-auto">
//                             <span className="f6 db black-70">Mrmrs</span>
//                             <span className="f6 db black-70">Medium Hexagon, LLC</span>
//                         </div>
//                         <div>
//                             <a href="tel:" className="f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
//                         </div>
//                     </li>
//                 </ul>
//             </header>
//         </div>
    );
}

export default App;
