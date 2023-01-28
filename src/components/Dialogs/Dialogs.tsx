import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";

import {MessagesPageType} from "../../redux/DialogsReducer";




type DialogsType = {
    updateNewMessageBody:(dody:string)=>void
    sendMessage:()=>void
    dialogsPage:MessagesPageType
}
export const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
       /* props.store.dispatch(sendMessageActionCreator())*/
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
       /* props.store.dispatch(UpdateNewMessageBodyActiveCreator(body))*/
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