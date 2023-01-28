import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/ReduxStore";

import {Provider} from "react-redux";
import {StateType} from "./redux/store";



const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state=store.getState()
    rerenderEntireTree(state)
})