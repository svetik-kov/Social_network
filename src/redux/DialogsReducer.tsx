import React from 'react';
import {ActionTypes,  UpdateNewMessageBodyActiveType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogItemsType = {
    name: string
    id: number
}
export type MessageType = {
    id?: number
    message: string
}
 export type MessagesPageType = {
    dialogs: DialogItemsType[]
    messages: MessageType[]
    newMessageBody: string
}
//export type InitialStateType=MessagesPageType


let initialState={
    dialogs: [
        {id: 1, name: 'Svetlana'},
        {id: 2, name: 'Nina'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Nadya'},
        {id: 5, name: 'Olia'},
        {id: 6, name: 'Marina'},
    ] as Array<DialogItemsType>,
    messages: [
        {id: 1, message: 'Hi!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'You are welcome!!!'},
    ] as Array<MessageType>,
    newMessageBody: ''
}
export type InitialStateType=typeof initialState

 const DialogsReducer = (state:InitialStateType=initialState,action:ActionTypes):InitialStateType => {

     switch (action.type){
         case UPDATE_NEW_MESSAGE_BODY:{
           return  {
                 ...state,
                 newMessageBody: action.body
             }

         }
         case SEND_MESSAGE:{
             let body=state.newMessageBody
              return{...state,
                  newMessageBody: '',
                 messages:[...state.messages,{id: 4, message: body}]
             }
         }
         default:
             return state
     }
};

export const UpdateNewMessageBodyActiveCreator = (text: string): UpdateNewMessageBodyActiveType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})
export default DialogsReducer