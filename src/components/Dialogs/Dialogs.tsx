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
               {/* {dialogs.map((el=>{
                    return (
                        <DialogItems name={el.name} id={el.id}/>
                    )
                }))}*/}

                {/*   <DialogItems name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItems name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItems name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItems name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItems name={dialogs[4].name} id={dialogs[4].id}/>
                <DialogItems name={dialogs[5].name} id={dialogs[5].id}/>*/}
            </div>

            <div className={s.messages}>
                {messagesElements}
               {/* <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>*/}
            </div>
        </div>
    )
}