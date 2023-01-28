import React from 'react';
import { StateType} from "./store";


type initialStateType={}
let initialState:initialStateType={}
 const SidebarReducer = (state=initialState, action:{}) => {
   /* if (action.type === ADD_POST) {
        let newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounter: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber()
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageBody = action.body
        this._callSubscriber()
    } else if (action.type === SEND_MESSAGE) {
        let body = this._state.dialogsPage.newMessageBody
        this._state.dialogsPage.newMessageBody = ''
        this._state.dialogsPage.messages.push({id: 4, message: body})
    }*/
    return state
};

export default SidebarReducer