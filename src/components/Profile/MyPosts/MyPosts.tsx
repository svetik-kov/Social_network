import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postBlock}>
           <h3>My posts</h3>
            {/* <div>New post</div>*/}
            <div>
              <div>
                  <textarea></textarea>
              </div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message={'Hello!!!how are you?'} likeCounter={15}/>
                <Post message={'It is my first message.'} likeCounter={10}/>
                <Post message={'It is nice!'} likeCounter={150}/>

            </div>
        </div>
    )
}