import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemsType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}
const DialogItems = (props: DialogItemsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    let dialogData=[
        {id:1,name:'Svetlana'},
        {id:2,name:'Nina'},
        {id:3,name:'Dima'},
        {id:4,name:'Nadya'},
        {id:5,name:'Olia'},
        {id:6, name:'Marina'},
    ]
    let messageData=[
        {id:1, message:'Hi!!!'},
        {id:2, message:'How are you?'},
        {id:3, message:'You are welcome!!!'},

    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <DialogItems name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItems name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItems name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItems name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItems name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItems name={dialogData[5].name} id={dialogData[5].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    )
}