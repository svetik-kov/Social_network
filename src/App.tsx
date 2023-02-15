import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App() {

    return (

        /*   <BrowserRouter>*/
        <div className="appWrapper">
            <Header/>
            <NavBar/>

            <div className="appWrapperContent">
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/users'} render={()=><UsersContainer/>}/>
               {/*<Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/setting'} render={() => <Settings/>}/>*/}

            </div>
        </div>
        // </BrowserRouter>
    );
}


export default App;
