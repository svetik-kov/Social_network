import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfileType = {
   // store: ReduxStoreType
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
            <MyPostsContainer/>

        </div>
    )
}