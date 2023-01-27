import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/ReduxStore";
import {StateType,} from "./redux/store";


const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
               // state={state}
                // dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state=store.getState()
    rerenderEntireTree(state)
})