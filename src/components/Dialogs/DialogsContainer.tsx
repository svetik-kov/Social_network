import React, {ChangeEvent} from "react";

import {
    sendMessageActionCreator,
} from "../../redux/store";
import {UpdateNewMessageBodyActiveCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsContainerType = {

    // state:messagesPageType
    // dispatch:(action:ActionTypes)=>void
    //store: ReduxStoreType

}
export const DialogsContainer = (props: DialogsContainerType) => {

     return (
         <StoreContext.Consumer>
             { store=>{
                 let state = store.getState().dialogsPage

                 let onSendMessageClick = () => {
                     store.dispatch(sendMessageActionCreator())
                 }
                 let onNewMessageChange = (body:string) => {
                     store.dispatch(UpdateNewMessageBodyActiveCreator(body))
                 }
                 return (
                     <Dialogs
                         UpdateNewMessageBody={onNewMessageChange}
                         onSendMessage={onSendMessageClick}
                         store={store}
                         dialogsPage={state}/>
                 )
             }
             }

         </StoreContext.Consumer>

     )

}