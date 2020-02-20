import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {App} from "./components/App";
import {store} from './helpers';

import { configureFakeBackend } from './helpers';
configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);