import React from 'react';
import {ActionTypes, PostsType, StateType} from "./state";


 const DialogsReducer = (state:StateType,action:ActionTypes) => {
    const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
    const SEND_MESSAGE = 'SEND-MESSAGE'

     switch (action.type){
         case "UPDATE-NEW-MESSAGE-BODY":
             state.dialogsPage.newMessageBody = action.body
             return state
         case "SEND-MESSAGE":
             let body = state.dialogsPage.newMessageBody
             state.dialogsPage.newMessageBody = ''
             state.dialogsPage.messages.push({id: 4, message: body})
             return state
         default:
             return state
     }
};

export default DialogsReducer