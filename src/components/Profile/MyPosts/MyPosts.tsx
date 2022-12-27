import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postData=[
        {id:1, message:'Hello!!!how are you?',likeCounter:15},
        {id:2, message:'It is my first message.', likeCounter:10},
        {id:3, message:'It is nice!', likeCounter:150},

    ]
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
                <Post message={postData[0].message} likeCounter={postData[0].likeCounter}/>
                <Post message={postData[1].message} likeCounter={postData[1].likeCounter}/>
                <Post message={postData[2].message} likeCounter={postData[2].likeCounter}/>

            </div>
        </div>
    )
}