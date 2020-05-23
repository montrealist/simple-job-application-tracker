import React from 'react';
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
// import { action } from "@storybook/addon-actions";

import "../index.css";
import "../App.css";

import ItemNotFound from '../ItemNotFound';

// const dummyEntries = [
//   {
//       id: 1,
//       type: "PhoneInterviewComplete", 
//       company: "Foobar Inc.", 
//       position: "Star Blazing Software Developer", 
//       notes: "Some notes"
//   }
// ];

storiesOf("ItemNotFound", module)
    .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
    .add("Default", () => <ItemNotFound></ItemNotFound>)
    .add("With ID", () => <ItemNotFound id={666}></ItemNotFound>)
    .add("Router link to add item", () => <ItemNotFound id={666} link={"/foobar"}></ItemNotFound>);