import React from 'react';
import {ActionTypes, PostsType, StateType} from "./state";


 const DialogsReducer = (state:StateType,action:ActionTypes) => {
    const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
    const SEND_MESSAGE = 'SEND-MESSAGE'

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.dialogsPage.newMessageBody = action.body

    } else if (action.type === SEND_MESSAGE) {
        let body = state.dialogsPage.newMessageBody
        state.dialogsPage.newMessageBody = ''
       state.dialogsPage.messages.push({id: 4, message: body})
    }
    return state
};

export default DialogsReducer