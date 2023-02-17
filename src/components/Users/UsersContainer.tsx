import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/UsersReducer";
import {RootReduceType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";
import Users from "./UsersC";


export type MapStatePropsType={
    users:Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number

}
type MapDispatchPropsType={
    follow: (userId: number) =>void
    unFollow:(userId: number) =>void
    setUsers:(users: UserType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

export type UsersType=MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: RootReduceType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);