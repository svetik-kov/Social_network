import React from "react";
import s from './Dialogs.module.css'

export const Dialogs = () => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <div className={s.dialog +' '+ s.active}>Svetlana</div>
          <div className={s.dialog}>Nina</div>
          <div className={s.dialog}>Dima</div>
          <div className={s.dialog}>Nadya</div>
          <div className={s.dialog}>Olya</div>
          <div className={s.dialog}>Marina</div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi!!! </div>
          <div className={s.message}> How are you?</div>
          <div className={s.message}> You are welcome!!! </div>
        </div>
      </div>
  )
}