import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";

export type RootReduceType=ReturnType<typeof rootReduce>
export type ReduxStoreType=typeof store

let rootReduce =combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer
})
let store=createStore(rootReduce);



export default store