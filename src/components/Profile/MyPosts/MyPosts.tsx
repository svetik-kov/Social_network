import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType, updateNewPostText} from "../../../redux/state";


type MyPostsType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
export const MyPosts = (props: MyPostsType) => {
    /*  let posts=[
          {id:1, message:'Hello!!!how are you?',likeCounter:15},
          {id:2, message:'It is my first message.', likeCounter:10},
          {id:3, message:'It is nice!', likeCounter:150},
      ]*/
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)
    /*let addPost=()=>{
         if (newPostElement.current){
         let text=newPostElement.current.value
        alert(text)
    }}*/
    let addPost = () => {
        props.addPost();
       /* props.updateNewPostText('')*/

    }
    const onPostChange = () => {
        if (newPostElement.current){
        let text=newPostElement.current.value
        props.updateNewPostText(text)
    }}
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            {/* <div>New post</div>*/}
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
            </div>
        </div>
    )
}