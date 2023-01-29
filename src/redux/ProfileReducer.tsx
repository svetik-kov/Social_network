import React from 'react';
import {
    ActionTypes,
    UpdateNewPostTextActiveType
} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostsType = {
    id: number
    message: string
    likeCounter: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type AddPostActiveType = {
    type: 'ADD-POST'
}

//export type InitialStateType=ProfilePageType
let initialState={
    posts: [
        {id: 1, message: 'Hello!!!how are you?', likeCounter: 15},
        {id: 2, message: 'It is my first message.', likeCounter: 10},
        {id: 3, message: 'It is nice!', likeCounter: 150},
    ] as Array<PostsType>,
    newPostText: ''

}
export type InitialStateType=typeof initialState

 const ProfileReducer = (state:InitialStateType=initialState,action:ActionTypes):InitialStateType=> {
      switch (action.type){
         case ADD_POST:{
             let newPost: PostsType = {
                 id: 5,
                 message: state.newPostText,
                 likeCounter: 0
             }
            return  {
                 ...state,
                 posts:[...state.posts,newPost] ,
                 newPostText: ''
             }


         }

         case UPDATE_NEW_POST_TEXT:{
             return {
                 ...state,
                 newPostText:action.newText
             }

         }
         default: return state
     }
};
export const addPostActionCreator = (): AddPostActiveType => ({type: ADD_POST})
export const UpdateNewPostTextActiveCreator = (text: string): UpdateNewPostTextActiveType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default ProfileReducer