import React, {createRef} from "react";
/*import s from './Dialogs.module.css'*/
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";


/*type MessageType = {
    message: string
}*/

export const Message = (props: MessageType) => {
    let newMessage=createRef<HTMLTextAreaElement>()
    let addMessage=()=>{
        alert(newMessage.current?.value)
    }

    return (
        <div>
       {/*   <div>
              <textarea ref={ newMessage}></textarea>
              <button onClick={addMessage}>New message</button>
          </div>*/}
            <div className={s.message}>{props.message}</div>
        </div>
    )
}
