import styles from "./users.module.css";
import userPhoto from "../../asseds/images/user.png";
import React from "react";
import {UserType} from "../../redux/UsersReducer";



export type UsersAPIType = {
    totalUsersCount:number
    pageSize:number
    currentPage:number
    users: UserType[]
    follow: (userId: number) =>void
    unFollow:(userId: number) =>void
    onPageChanged:(p:number)=>void


}
export const Users = (props:UsersAPIType) => {
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)
    let pages=[]
    for (let i=1;i<=pagesCount;i++)
        pages.push(i)
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}

            </div>
            {props.users.map(u => {

                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.large ? u.photos.large : userPhoto} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unFollow(u.id)}> Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}> Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>
                                    {'u.location.city'}
                                </div>
                                <div>{'u.location.country'}</div>
                            </span>
                        </span>
                    </div>
                )

            })}
        </div>
    );
}