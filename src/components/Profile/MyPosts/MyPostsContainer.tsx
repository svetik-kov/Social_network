import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    ActionTypes,
    AddPostActiveType,
    PostsType, StoreType,
    UpdateNewPostTextActiveType
} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextActiveCreator} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/ReduxStore";


type MyPostsContainerType = {
 /*  addPost: () => void
   updateNewPostText: (newText: string) => void
    posts: PostsType[]
    newPostText: string*/
    store:ReduxStoreType
  // dispatch: (action: ActionTypes) => void
}

export const MyPostsContainer = (props: MyPostsContainerType) => {
let state=props.store.getState()

    let addPost = () => {
        //props.addPost()
        props.store.dispatch(addPostActionCreator())
        /* props.updateNewPostText('')*/
    }
    const onPostChange = (text: string) => {
        /*    if (newPostElement.current){
            let text=newPostElement.current.value
           /!* props.updateNewPostText(text)*!/
                props.dispatch(UpdateNewPostTextActiveCreator(text))
        }*/
        let action = UpdateNewPostTextActiveCreator(text)
        props.store.dispatch(action)
    }
    return (<MyPosts posts={state.profilePage.posts} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} />)
    {/* <h3>My posts</h3>
             <div>New post</div>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>*/
    }


}