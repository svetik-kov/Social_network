import React from 'react';
import {ActionTypes, PostsType, StateType} from "./state";



 const ProfileReducer = (state:StateType,action:ActionTypes) => {
    const ADD_POST = 'ADD-POST'
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
     switch (action.type){
         case "ADD-POST":
             let newPost: PostsType = {
                 id: 5,
                 message: state.profilePage.newPostText,
                 likeCounter: 0
             }
             state.profilePage.posts.push(newPost)
             state.profilePage.newPostText = ''
             return state
         case "UPDATE-NEW-POST-TEXT":
             state.profilePage.newPostText = action.newText
             return state
         default: return state
     }

};

export default ProfileReducer