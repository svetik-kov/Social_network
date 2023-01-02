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
import {DialogItemsType, MessageType, PostsType, StateType} from "./redux/state";



type AppType={
       state:StateType
    addPost:(postMessage:string)=>void
}

function App(props:AppType) {

    return (
     /*   <BrowserRouter>*/
            <div className="appWrapper">
                <Header/>
                <NavBar/>
                <div className="appWrapperContent">

                    <Route  path={'/dialogs'} render={()=> <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path={'/profile'} render={()=><Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/setting'} render={()=><Settings/>}/>

                </div>
            </div>
        // </BrowserRouter>
    );
}


export default App;
