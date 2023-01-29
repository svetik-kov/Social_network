import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/UsersReducer";
import {RootReduceType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";

type MapStatePropsType={
    users:Array<UserType>
}
type MapDispatchPropsType={
    follow: (userId: number) =>void
    unFollow:(userId: number) =>void
    setUsers:(users: UserType[])=>void
}

export type UsersType=MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: RootReduceType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow:(userId: number) =>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users: UserType[])=>{
            dispatch(setUsersAC(users))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);