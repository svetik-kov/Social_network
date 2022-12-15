import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>Svetlana</div>
                <div className={s.dialog}>
                    <NavLink to={'/dialog/1'}>Nina</NavLink>
                </div>
                <div className={s.dialog}>
                   <NavLink to={'//dialog/2'}>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialog/3'}>Nadya</NavLink>
                </div>
                <div className={s.dialog}>
                   <NavLink to={'/dialog/4'}>Olia</NavLink>
                </div>
                <div className={s.dialog}>
                   <NavLink to={'/dialog/'}>Marina</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!!!</div>
                <div className={s.message}> How are you?</div>
                <div className={s.message}> You are welcome!!!</div>
            </div>
        </div>
    )
}