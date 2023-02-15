import {UsersType} from "./UsersContainer";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../asseds/images/user1.png'

export const Users = (props: UsersType) => {
    if(props.users.length===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response=>{

                props.setUsers(response.data.items)
            })
        /*props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/06/3c64a0623ece869ea36f05a8fedbf404.jpg',
                    followed: false,
                    fullName: 'Svetlana',
                    status: 'I am nice',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511880_29.jpg',
                    followed: true,
                    fullName: 'Marina',
                    status: 'online',
                    location: {city: 'Loev', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-panda-v-ochkah.jpg',
                    followed: false,
                    fullName: 'Dima',
                    status: 'busy',
                    location: {city: 'Gomel', country: 'Belarus'}
                },
            ]
        )*/
    }

    return (
        <div>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl!==null ? u.photoUrl :userPhoto} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unFollow(u.id)}> Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}> Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
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

    )
}