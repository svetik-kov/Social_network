import React from 'react';
import {
    ActionTypes,
    AddPostActiveType,
    PostsType,
    profilePageType,
    StateType,
    UpdateNewPostTextActiveType
} from "./store";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
type initialStateType=profilePageType
let initialState:initialStateType={
    posts: [
        {id: 1, message: 'Hello!!!how are you?', likeCounter: 15},
        {id: 2, message: 'It is my first message.', likeCounter: 10},
        {id: 3, message: 'It is nice!', likeCounter: 150},
    ],
    newPostText: ''

}
 const ProfileReducer = (state=initialState,action:ActionTypes) => {
      switch (action.type){
         case ADD_POST:
             let newPost: PostsType = {
                 id: 5,
                 message: state.newPostText,
                 likeCounter: 0
             }
             state.posts.push(newPost)
             state.newPostText = ''
             return state
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText
             return state
         default: return state
     }
};
export const addPostActionCreator = (): AddPostActiveType => ({type: ADD_POST})
export const UpdateNewPostTextActiveCreator = (text: string): UpdateNewPostTextActiveType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default ProfileReducer