import React from 'react';
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';

import "../index.css";
import "../App.css";

import StatusMessage from '../components/StatusMessage';

storiesOf("StatusMessage", module)
    .add("Nothing passed in", () => <StatusMessage></StatusMessage>)
    .add("Message", () => <StatusMessage msg="Some message"></StatusMessage>)
    .add("Error", () => <StatusMessage msg="Some error" error={true} ></StatusMessage>);