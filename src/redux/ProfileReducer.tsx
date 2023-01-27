import React from 'react';
import {ActionTypes, AddPostActiveType, PostsType, StateType, UpdateNewPostTextActiveType} from "./state";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
 const ProfileReducer = (state:StateType,action:ActionTypes) => {
      switch (action.type){
         case ADD_POST:
             let newPost: PostsType = {
                 id: 5,
                 message: state.profilePage.newPostText,
                 likeCounter: 0
             }
             state.profilePage.posts.push(newPost)
             state.profilePage.newPostText = ''
             return state
         case UPDATE_NEW_POST_TEXT:
             state.profilePage.newPostText = action.newText
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