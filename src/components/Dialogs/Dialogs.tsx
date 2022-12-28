import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";

// type DialogItemsType = {
//     name: string
//     id: number
// }
/*type MessageType = {
    message: string
}*/
/*const DialogItems = (props: DialogItemsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}*/
/*const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}*/
export const Dialogs = () => {
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
    ]
    let dialogsElements=dialogs.map(d=><DialogItems name={d.name} id={d.id}/>)
   let messagesElements=messages.map(m=> <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
                          </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}