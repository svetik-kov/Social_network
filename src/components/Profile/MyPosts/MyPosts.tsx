import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts=()=>{
    return (
        <div>

            <div>
                My posts
                <div>New post</div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
                {/*<div className={s.item}>
                    <img src={'https://avatanplus.com/files/resources/original/58dfabe4a915a15b29b77555.png'}/>
                    Post 1
                </div>
                <div className={s.item}>Post 2</div>
                <div className={s.item}>Post 3</div>
                <div className={s.item}>Post 4</div>*/}
            </div>

        </div>
    )
}