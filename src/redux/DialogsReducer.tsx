import React from 'react';
import {ActionTypes, PostsType, StateType, UpdateNewMessageBodyActiveType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
 const DialogsReducer = (state:StateType,action:ActionTypes) => {
     switch (action.type){
         case UPDATE_NEW_MESSAGE_BODY:
             state.dialogsPage.newMessageBody = action.body
             return state
         case SEND_MESSAGE:
             let body = state.dialogsPage.newMessageBody
             state.dialogsPage.newMessageBody = ''
             state.dialogsPage.messages.push({id: 4, message: body})
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