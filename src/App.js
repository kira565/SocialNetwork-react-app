import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer"
import Music from "./components/music/Music"
import News from "./components/news/News"
import Settings from "./components/settings/Settings"
import {Route} from 'react-router-dom'
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Route render={() => <DialogsContainer/> } path='/dialogs'/>
                <Route render={() => <ProfileContainer/> } path='/profile/:userId?'/>
                <Route render={()=> <UsersContainer/>} path={'/users'}/>
                <Route component={Music} path={'/music'}/>
                <Route component={News} path={'/news'}/>
                <Route component={Settings} path={'/settings'}/>
            </div>
        </div>
    );
};


export default App;
