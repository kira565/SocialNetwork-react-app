import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer"
import Music from "./components/music/Music"
import News from "./components/news/News"
import Settings from "./components/settings/Settings"
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login-page/login-page";
import {compose} from "redux";
import {connect} from 'react-redux'
import {initializeApp} from "./redux/store/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {Route, withRouter} from "react-router-dom";
import store from "./redux/store/redux-store";
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
//import Jobs from "./components/jobs/Jobs";
import JobsContainer from "./components/jobs/JobsContainer";

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader preType="init"/>
        }

        return (
            <>
                <section className="header__wrapper">
                    <div className="container">
                        <HeaderContainer/>
                    </div>
                </section>
                <section className="main__wrapper">
                    <div className="container main">
                        <div className="row">
                            <div className="col-sm-2">
                                <Navbar/>
                            </div>
                            <div className="col-12 col-sm-9 offset-sm-1">
                                <div className="app-wrapper-content">
                                    <Route render={() => <DialogsContainer/>} path='/dialogs'/>
                                    <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                                    <Route render={() => <UsersContainer/>} path={'/users'}/>
                                    <Route component={Music} path={'/music'}/>
                                    <Route component={News} path={'/news'}/>
                                    <Route render={() => <JobsContainer/>} path={'/jobs'}/>
                                    <Route component={Settings} path={'/settings'}/>
                                    <Route render={() => <LoginPage/>} path={'/login'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};

export default SocialNetworkApp