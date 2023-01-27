import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsType, profilePageType, StateType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/ReduxStore";


type ProfileType = {
    store: ReduxStoreType
    // profilePage: profilePageType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    //dispatch:(action:ActionTypes)=>void
}
export const Profile = (props: ProfileType) => {
debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // posts={props.profilePage.posts}
                // newPostText={props.profilePage.newPostText}
                // //dispatch={props.dispatch}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
            />

        </div>
    )
}