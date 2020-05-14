import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import db from './db';
import AddEditItem from './AddEditItem';
import ItemList from './ItemList';
import ItemNotFound from './ItemNotFound';

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
        setState({ applications });
      });
  }, []);

  const onAddItem = (item) => {
    db.table(tableName)
      .add(item)
      .then((id) => {
        const newList = [...state.applications, Object.assign({}, item, { id })];
        setState({ applications: newList });
      });
  }

  const onEditItem = (id, item) => {
    const idToUpdate = parseInt(id, 10);
    db.table(tableName)
      .update(idToUpdate, item).then((updated) => {
        if (updated) {
          console.info(`update of record ${id} was ok`);
          const newList = state.applications.map((app) => {
            return app.id === id ? Object.assign(item, { id }) : app;
          });
          setState({ applications: newList });
        } else {
          console.error(`DB not updated - no record with ID ${id}`);
        }
      });
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

  function EditItem(props) {
    const { applications, match } = props;

    if (!applications.length) {
      return (<div className="f3 list pl0 mt0 measure-wide-ns center">Loading...</div>);
    }

    const id = match.params.id;
    const item = props.applications.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
    if (item) {
      return (
        <AddEditItem {...item} onEdit={onEditItem} onSave={onAddItem} />
      );
    } else {
      return (
        <ItemNotFound id={id} />
      );
    }
  }

  function AddEdit() {
    return (
      <Switch>
        <Route exact path='/edit' render={(props) => <AddEditItem {...props} onSave={onAddItem} />} />
        <Route path='/edit/:id' render={(props) => <EditItem {...props} applications={state.applications} />} />
      </Switch>
    );
  }

  return (
    <Router>
      <div>
        <div>
          <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked db dt-l w-100 border-box">
              <Link className="link dim white dib mr3" to="/">List</Link>
              <Link className="link dim white dib mr3" to="/add">Add Item</Link>
              <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <Link className={"link tr-l dim dib mr3 " + (state.applications.length ? 'mid-gray' : 'white')} to="/seed">Seed some list entries</Link>
              </div>
            </nav>
          </header>
        </div>
        <section className="pv6-ns">
          <Switch>
            <Route path="/add">
              <AddEditItem onSave={onAddItem} />
            </Route>
            <Route path='/edit' component={AddEdit} />
            <Route path='/seed' component={() => { 
                window.location.href = '/seed.html'; 
                return null;
            }}/>
            <Route path="/">
              <ItemList onDelete={onDeleteItem} items={state.applications} />
            </Route>
          </Switch>
        </section>

      </div>
    </Router>
  );
}

export default App;
