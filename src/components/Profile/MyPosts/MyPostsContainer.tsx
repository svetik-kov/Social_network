import React from "react";

import {
    addPostActionCreator,
    InitialStateType, PostsType,
    UpdateNewPostTextActiveCreator
} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootReduceType} from "../../../redux/ReduxStore";
import {Dispatch} from "redux";


/*type MyPostsContainerType = {
 /!*  addPost: () => void
   updateNewPostText: (newText: string) => void
    posts: PostsType[]
    newPostText: string*!/
    //store:ReduxStoreType
  // dispatch: (action: ActionTypes) => void
}*/

/*export const MyPostsContainer = (props: MyPostsContainerType) => {

    return (
        <StoreContext.Consumer>
            {
            (store)=>{
                let state=store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChange = (text: string) => {

                    let action = UpdateNewPostTextActiveCreator(text)
                    store.dispatch(action)
                }
                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        addPost={addPost}
                        newPostText={state.profilePage.newPostText}
                        updateNewPostText={onPostChange} />
                )}}
        </StoreContext.Consumer>
    )}*/

type MapStatePropsType={
    posts:Array<PostsType>
    newPostText:string
}
type MapDispatchPropsType={
    addPost: ()=>void
    updateNewPostText: (text: string)=>void
}
export type MyPostType=MapStatePropsType & MapDispatchPropsType

const mapStateToProps=(state:RootReduceType):MapStatePropsType=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return {
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string)=>{
            let action = UpdateNewPostTextActiveCreator(text)
            dispatch(action)
        }}
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)