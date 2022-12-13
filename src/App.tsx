import React from 'react';
import './App.css';


function App() {
    return (
        <div className="appWrapper">
            <header className={'header'}>
                <img src={'https://www.logo.wine/a/logo/Ethereum/Ethereum-Icon-Purple-Logo.wine.svg'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a> News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <img src={'https://walldeco.ua/img/gallery/19/thumbs/thumb_l_4937.jpg'}/>

                <div>ava+description</div>
                <div>
                    My posts
                    <div>New post</div>
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                    <div>Post 4</div>
                </div>
            </div>
        </div>
    );
}


export default App;
