import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/Settinds/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {ActionTypes, StateType, StoreType} from "./redux/store";
import {ReduxStoreType} from "./redux/ReduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppType = {
   // state: StateType
    //dispatch:(action:ActionTypes)=>void
    //store:ReduxStoreType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

function App(props: AppType) {
debugger
    return (

        /*   <BrowserRouter>*/
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <div className="appWrapperContent">

                <Route path={'/dialogs'} render={() => <DialogsContainer
                    //store={props.store}

                    /* dispatch={props.dispatch} state={props.state.dialogsPage}*//>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           //store={props.store}

                           // profilePage={props.state.profilePage}
                           // addPost={props.addPost}
                           // updateNewPostText={props.updateNewPostText}
                           // dispatch={props.dispatch}
                       />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/setting'} render={() => <Settings/>}/>

            </div>
        </div>
        // </BrowserRouter>
    );
}


export default App;
