import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, profilePageType, StateType} from "../../redux/state";



type ProfileType={
   /* posts:PostsType[]*/
    state:profilePageType
}
export const Profile=(props:ProfileType)=>{
 /*   let posts=[
        {id:1, message:'Hello!!!how are you?',likeCounter:15},
        {id:2, message:'It is my first message.', likeCounter:10},
        {id:3, message:'It is nice!', likeCounter:150},
    ]*/

    return (
        <div >
          <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>

        </div>
    )
}