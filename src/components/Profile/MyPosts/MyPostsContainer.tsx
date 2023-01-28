import React from "react";

import {addPostActionCreator, UpdateNewPostTextActiveCreator} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";

import {StoreContext} from "../../../StoreContext";


type MyPostsContainerType = {
 /*  addPost: () => void
   updateNewPostText: (newText: string) => void
    posts: PostsType[]
    newPostText: string*/
    //store:ReduxStoreType
  // dispatch: (action: ActionTypes) => void
}

export const MyPostsContainer = (props: MyPostsContainerType) => {
//let state=props.store.getState()

  /*  let addPost = () => {
        //props.addPost()
        props.store.dispatch(addPostActionCreator())
        /!* props.updateNewPostText('')*!/
    }
    const onPostChange = (text: string) => {

        let action = UpdateNewPostTextActiveCreator(text)
        props.store.dispatch(action)
    }*/
    return (
        <StoreContext.Consumer>
            {
            (store)=>{
                let state=store.getState()

                let addPost = () => {
                    //props.addPost()
                    store.dispatch(addPostActionCreator())
                    /* props.updateNewPostText('')*/
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
                )
            }

        }

        </StoreContext.Consumer>

    )



}