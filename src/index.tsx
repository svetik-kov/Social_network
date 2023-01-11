import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {addPost, state, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)