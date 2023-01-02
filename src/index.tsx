import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
    <App state={state} /*posts={posts} dialogs={dialogs} messages={messages}*//>
    </BrowserRouter>,
  document.getElementById('root')
);