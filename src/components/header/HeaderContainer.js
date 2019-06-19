/**
 * Created by Kira on 21.05.2019.
 */
import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux'
import * as axios from "axios/index";
import {setUserAuthData} from "../../redux/store/auth-reducer";
import {headerAPI} from "../../api/api";


let MapStateToProps = (state) => ({
    userId: state.userAuth.userId,
    userLogin: state.userAuth.userLogin,
    userEmail: state.userAuth.userEmail,
    isAuth: state.userAuth.isAuth

});


class HeaderContainer extends React.Component{
    componentDidMount () {
        headerAPI.getUserAuthData()
            .then(data => {
                if (data.resultCode === 0){
                    let id = data.data.id;
                    let login = data.data.login;
                    let email = data.data.email;
                    this.props.setUserAuthData(id, login, email);
                }
            });
    }

    render(){
        return <Header {...this.props}/>
    }
}
   export default connect(MapStateToProps, {setUserAuthData})(HeaderContainer)