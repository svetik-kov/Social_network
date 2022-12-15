import {MyPosts} from "../MyPosts/MyPosts";
import React from "react";

import s from './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://walldeco.ua/img/gallery/19/thumbs/thumb_l_4937.jpg'}/>

                <div className={s.descriptionBlock}>
                    ava+description
                </div>

            </div>
        </div>
    )
}