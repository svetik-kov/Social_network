import React from "react";
/*import s from './Dialogs.module.css'*/
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'
import {DialogItemsType} from "../../../redux/store";


/*type DialogItemsType = {
    name: string
    id: number
}*/

 export const DialogItems = (props:DialogItemsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

