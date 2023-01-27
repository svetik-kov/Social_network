import React from 'react';
import {ActionTypes, messagesPageType, UpdateNewMessageBodyActiveType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type initialStateType=messagesPageType
let initialState:initialStateType={
    dialogs: [
        {id: 1, name: 'Svetlana'},
        {id: 2, name: 'Nina'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Nadya'},
        {id: 5, name: 'Olia'},
        {id: 6, name: 'Marina'},
    ],
    messages: [
        {id: 1, message: 'Hi!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'You are welcome!!!'},
    ],
    newMessageBody: ''
}
 const DialogsReducer = (state=initialState,action:ActionTypes) => {
     switch (action.type){
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body
             return state
         case SEND_MESSAGE:
             let body = state.newMessageBody
             state.newMessageBody = ''
             state.messages.push({id: 4, message: body})
             return state
         default:
             return state
     }
};
export const UpdateNewMessageBodyActiveCreator = (text: string): UpdateNewMessageBodyActiveType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})
export default DialogsReducer