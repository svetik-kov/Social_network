import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

/*export type PostsType={
    id:number
    message:string
    likeCounter:number
}
export type MessageType = {
    message: string
}
export type DialogItemsType = {
    name: string
    id: number
}

let posts=[
    {id:1, message:'Hello!!!how are you?',likeCounter:15},
    {id:2, message:'It is my first message.', likeCounter:10},
    {id:3, message:'It is nice!', likeCounter:150},
]
let dialogs = [
    {id: 1, name: 'Svetlana'},
    {id: 2, name: 'Nina'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Nadya'},
    {id: 5, name: 'Olia'},
    {id: 6, name: 'Marina'},
]

let messages = [
    {id: 1, message: 'Hi!!!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'You are welcome!!!'},
]*/
ReactDOM.render(
    <App state={state} /*posts={posts} dialogs={dialogs} messages={messages}*//>,
  document.getElementById('root')
);