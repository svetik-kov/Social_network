import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";

export type RootReduceType=ReturnType<typeof rootReduce>
export type ReduxStoreType=typeof store

let rootReduce =combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage:UsersReducer,
    sidebar: SidebarReducer
})
let store=createStore(rootReduce);



export default store