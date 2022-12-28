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


function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar/>
                <div className="appWrapperContent">
                   {/* <Route  path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/setting'} component={Settings}/>*/}

                    <Route  path={'/dialogs'} render={()=> <Dialogs/>}/>
                    <Route path={'/profile'} render={()=><Profile/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/setting'} render={()=><Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
