import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemsType={
    name:string
    id:number
}
type MessageType={
    message:string
}
const DialogItems = (props:DialogItemsType) => {
  return (
      <div className={s.dialog}>
          <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
      </div>
  )
}
const Message=(props:MessageType)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
               {/* <div className={s.dialog + ' ' + s.active}>
                   <NavLink to={'/dialog/1'}>Svetlana</NavLink>
                </div>*/}
                <DialogItems name={'Svetlana'} id={1}/>
                {/*<div className={s.dialog}>
                    <NavLink to={'/dialog/2'}>Nina</NavLink>
                </div>*/}
                <DialogItems name={'Nina'} id={2}/>
                {/*<div className={s.dialog}>
                   <NavLink to={'//dialog/3'}>Dima</NavLink>
                </div>*/}
                <DialogItems name={'Dima'} id={3}/>
               {/* <div className={s.dialog}>
                    <NavLink to={'/dialog/4'}>Nadya</NavLink>
                </div>*/}
                <DialogItems name={'Nadya'} id={4}/>
                {/*<div className={s.dialog}>
                   <NavLink to={'/dialog/5'}>Olia</NavLink>
                </div>*/}
                <DialogItems name={'Olia'} id={5}/>
                {/*<div className={s.dialog}>
                   <NavLink to={'/dialog/6'}>Marina</NavLink>
                </div>*/}
                <DialogItems name={'Marina'} id={6}/>
            </div>
            <div className={s.messages}>
               {/*<div className={s.message}>Hi!!!</div>
                <div className={s.message}> How are you?</div>
                <div className={s.message}> You are welcome!!!</div>*/}
                <Message message={'Hi!!!'}/>
                <Message message={'How are you?'}/>
                <Message message={'You are welcome!!!'}/>
            </div>
        </div>
    )
}