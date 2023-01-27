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
} from "../../redux/state";
import {UpdateNewMessageBodyActiveCreator} from "../../redux/DialogsReducer";


type DialogsType = {

    // state:messagesPageType
    // dispatch:(action:ActionTypes)=>void
    store: StoreType
}
export const Dialogs = (props: DialogsType) => {
    let state = props.store.getState().dialogsPage
    /*  let dialogs = [
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
    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(UpdateNewMessageBodyActiveCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder={'Enter new message'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}