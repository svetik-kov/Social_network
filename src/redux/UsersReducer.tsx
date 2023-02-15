import React from 'react';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

/*export type UserType = {
    id: number
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}*/
export type PhotosType={
    small:string
    large: string
}
export type UserType={
    name: string
    id: number
    uniqueUrlName:string| null
    photos: PhotosType,
    status:string| null,
    followed: boolean
}

type LocationType = {
    city: string
    country: string
}

//export type InitialStateType=UserType[]
let initialState = {
    users: [
        // {id: 1,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/06/3c64a0623ece869ea36f05a8fedbf404.jpg', followed: false,fullName: 'Svetlana',status: 'I am nice',location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2,photoUrl:'https://klike.net/uploads/posts/2019-03/1551511880_29.jpg', followed: true, fullName: 'Marina', status: 'online', location: {city: 'Loev', country: 'Belarus'}},
        // {id: 3,photoUrl:'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-panda-v-ochkah.jpg', followed: false, fullName: 'Dima', status: 'busy', location: {city: 'Gomel', country: 'Belarus'}},
    ] as Array<UserType>,

}
export type ActionType=FollowACType|UnFollowACType|setUsersACType
type FollowACType={
    type: 'FOLLOW',
    userId:number
}
type UnFollowACType={
    type: 'UNFOLLOW',
    userId:number
}
type setUsersACType={
    type: 'SET-USERS'
    users:UserType[]
}
export type InitialStateType = typeof initialState

const UsersReducer = (state: InitialStateType = initialState, action:ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state,users:[...state.users,...action.users]}
        default:
            return state
    }
};
export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users})
export default UsersReducer