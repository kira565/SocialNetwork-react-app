/**
 * Created by Kira on 21.05.2019.
 */
import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux'
import {logoutUser} from "../../redux/store/auth-reducer";



let MapStateToProps = (state) => ({
    userId: state.userAuth.userId,
    userLogin: state.userAuth.login,
    userEmail: state.userAuth.email,
    isAuth: state.userAuth.isAuth
});


class HeaderContainer extends React.Component{

    render(){
        return <Header {...this.props}/>
    }
}
   export default connect(MapStateToProps, {logoutUser})(HeaderContainer)