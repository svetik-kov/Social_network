import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostType} from "./MyPostsContainer";




export const MyPosts = (props: MyPostType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)


    let addPost = () => {
        props.addPost()

    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
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