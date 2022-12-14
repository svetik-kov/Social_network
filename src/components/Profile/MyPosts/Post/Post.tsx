import React from "react";
import s from './Post.module.css'

type PostType={
    message:string
    likeCounter:number
}
export const Post=(props:PostType)=>{
    return (
            <div className={s.item}>
                <img src={'https://avatanplus.com/files/resources/original/58dfabe4a915a15b29b77555.png'}/>
               {/* Post 1*/}
                {props.message}
               <div>
                   <span>like: </span>
                   {props.likeCounter}
               </div>
            </div>
    )
}