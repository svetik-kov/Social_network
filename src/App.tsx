import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import { Route} from "react-router-dom";
import {Settings} from "./components/Settinds/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


/*type AppType = {
   // state: StateType
    //dispatch:(action:ActionTypes)=>void
    //store:ReduxStoreType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}*/

function App() {
debugger
    return (

        /*   <BrowserRouter>*/
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <div className="appWrapperContent">

                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'}
                       render={() => <Profile/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/setting'} render={() => <Settings/>}/>

            </div>
        </div>
        // </BrowserRouter>
    );
}


export default App;
