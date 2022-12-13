import React from "react";
import s from './Post.module.css'

export const Post=()=>{
    return (
            <div className={s.item}>
                <img src={'https://avatanplus.com/files/resources/original/58dfabe4a915a15b29b77555.png'}/>
                Post 1
               <div>
                   <span>Like</span>
               </div>
            </div>
    )
}