import React, {ChangeEvent} from "react";

import {
    sendMessageActionCreator
} from "../../redux/store";
import {InitialStateType, UpdateNewMessageBodyActiveCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReduceType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";


/*type DialogsContainerType = {

    // state:messagesPageType
    // dispatch:(action:ActionTypes)=>void
    //store: ReduxStoreType
}*/
/*export const DialogsContainer = (props: DialogsContainerType) => {

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
                         updateNewMessageBody={onNewMessageChange}
                         sendMessage={onSendMessageClick}
                         store={store}
                         dialogsPage={state}/>
                 )
             }
             }
         </StoreContext.Consumer>
     )
}*/

type mapStatePropsType={
    dialogsPage:InitialStateType
}
type mapDispatchPropsType={
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}
const mapStateToProps=(state:RootReduceType):mapStatePropsType=>{
    return {
        dialogsPage:state.dialogsPage
    }
}
const mapDispatchToProps=(dispatch:Dispatch):mapDispatchPropsType=>{
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(UpdateNewMessageBodyActiveCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageActionCreator())
        }
    }
}
export const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs)