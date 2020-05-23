import React from 'react';
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import { action } from "@storybook/addon-actions";

import "../index.css";
import "../App.css";

import ItemList from '../ItemList';

const dummyEntries = [
  {
      id: 1,
      type: "PhoneInterviewComplete", 
      company: "Foobar Inc.", 
      position: "Star Blazing Software Developer", 
      notes: "Some notes"
  }
];

storiesOf("ItemList", module)
    .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
    .add("Empty list", () => <ItemList></ItemList>)
    .add("With entries", () => <ItemList items={dummyEntries} onDelete={action("onDelete clicked!")}></ItemList>);