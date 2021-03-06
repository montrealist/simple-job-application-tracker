import React from 'react';
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';

import "../index.css";
import "../App.css";

import Header from '../components/Header';

const dummyEntries = [
    {
        id: 1,
        type: "PhoneInterviewComplete", 
        company: "Foobar Inc.", 
        position: "Star Blazing Software Developer", 
        notes: "Some notes"
    }
];

storiesOf("Header", module)
    .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
    .add("Default header", () => <Header></Header>)
    .add("With entries", () => <Header entries={dummyEntries}></Header>);