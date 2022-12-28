import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../index";


// type PostsType={
//     id:number
//     message:string
//     likeCounter:number
// }
 type MyPostsType={
   posts:PostsType[]
 }
export const MyPosts = (props:MyPostsType) => {
  /*  let posts=[
        {id:1, message:'Hello!!!how are you?',likeCounter:15},
        {id:2, message:'It is my first message.', likeCounter:10},
        {id:3, message:'It is nice!', likeCounter:150},
    ]*/
    let postsElements=props.posts.map(p=><Post message={p.message} likeCounter={p.likeCounter}/>)
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
                {postsElements}
                           </div>
        </div>
    )
}