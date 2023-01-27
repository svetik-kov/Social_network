import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import {
    ActionTypes,
    DialogItemsType,
    messagesPageType,
    MessageType, sendMessageActionCreator,
    StateType, StoreType,
    UpdateNewMessageBodyActiveType
} from "../../redux/store";
import {UpdateNewMessageBodyActiveCreator} from "../../redux/DialogsReducer";
import {ReduxStoreType} from "../../redux/ReduxStore";
import {Dialogs} from "./Dialogs";


type DialogsContainerType = {

    // state:messagesPageType
    // dispatch:(action:ActionTypes)=>void
    store: ReduxStoreType

}
export const DialogsContainer = (props: DialogsContainerType) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (body:string) => {
      props.store.dispatch(UpdateNewMessageBodyActiveCreator(body))
     }
     return (<Dialogs
         UpdateNewMessageBody={onNewMessageChange}
         onSendMessage={onSendMessageClick}
         store={props.store}
         dialogsPage={state}

     />)

}