import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile=()=>{
    return (
        <div >
            <img src={'https://walldeco.ua/img/gallery/19/thumbs/thumb_l_4937.jpg'}/>

            <div>ava+description</div>
            <MyPosts/>

        </div>
    )
}