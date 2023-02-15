
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../asseds/images/user.png'
import React from "react";
import {MapStatePropsType, UsersType} from "./UsersContainer";
import {UserType} from "../../redux/UsersReducer";

export type UsersCType={
    users:UsersType[]
    follow: (userId: number) =>void
    unFollow:(userId: number) =>void
    setUsers:(users: UserType[])=>void
}
class Users extends React.Component<UsersType,MapStatePropsType>{
    constructor(props:UsersType) {
        super(props);
        }
componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {

            this.props.setUsers(response.data.items)
        })
}

    /* getUsers = () => {
         if (this.props.users.length === 0) {
             axios.get('https://social-network.samuraijs.com/api/1.0/users')
                 .then(response => {

                     this.props.setUsers(response.data.items)
                 })
         }
     }*/
    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}> Get users</button>*/}
                {this.props.users.map(u=> {
                    debugger
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.large ? u.photos.large : userPhoto} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unFollow(u.id)}> Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}> Follow</button>}

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
}
export default Users