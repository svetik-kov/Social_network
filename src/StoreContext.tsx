import React from "react";
import {ActionTypes, StateType, StoreType} from "./redux/store";
import {Store} from "redux";
import store, {ReduxStoreType} from "./redux/ReduxStore";


export const StoreContext=React.createContext({}as typeof store)





/*type ProviderType={
    store:StoreType
    children:React.ReactNode
}
export const Provider=(props:ProviderType)=>{
    return (
<StoreContext.Provider value={props.store}>
    {props.children}
</StoreContext.Provider>

    )
}*/
