import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/ReduxStore";
import {StateType,} from "./redux/store";
import {Provider, StoreContext} from "./StoreContext";


const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // state={state}
                    // dispatch={store.dispatch.bind(store)}
                   // store={store}
                />
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