import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer"
import Music from "./components/music/Music"
import News from "./components/news/News"
import Settings from "./components/settings/Settings"
import {Route} from 'react-router-dom'
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login-page/login-page";


const App = () => {
    return (
        <>
            <section className="header__wrapper">
                <div className="container">
                    <HeaderContainer />
                </div>
            </section>
            <section className="main__wrapper">
                <div className="container main">
                    <div className="row">
                        <div className="col-sm-2">
                            <Navbar />
                        </div>
                        <div className="col-sm-9 offset-1">
                            <div className="app-wrapper-content">
                                <Route render={() => <DialogsContainer/> } path='/dialogs'/>
                                <Route render={() => <ProfileContainer/> } path='/profile/:userId?'/>
                                <Route render={()=> <UsersContainer/>} path={'/users'}/>
                                <Route component={Music} path={'/music'}/>
                                <Route component={News} path={'/news'}/>
                                <Route component={Settings} path={'/settings'}/>
                                <Route render={() => <LoginPage/>} path={'/login'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default App;
