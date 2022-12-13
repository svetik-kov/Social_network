import React from "react";
import s from  './Profile.module.css'

export const Profile=()=>{
    return (
        <div className={s.content}>
            <img src={'https://walldeco.ua/img/gallery/19/thumbs/thumb_l_4937.jpg'}/>

            <div>ava+description</div>
            <div>
                My posts
                <div>New post</div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
                <div className={s.item}>Post 3</div>
                <div className={s.item}>Post 4</div>
            </div>
        </div>
    )
}