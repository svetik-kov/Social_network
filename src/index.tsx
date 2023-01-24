import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)