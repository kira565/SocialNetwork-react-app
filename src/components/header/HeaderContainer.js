/**
 * Created by Kira on 21.05.2019.
 */
import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux'
import {logoutUser} from "../../redux/store/auth/auth-reducer";
import {getUserAuth, getUserEmail, getUserId, getUserLogin} from "../../redux/store/auth/auth-selectors";



let MapStateToProps = (state) => ({
    userId: getUserId(state),
    userLogin: getUserLogin(state),
    userEmail: getUserEmail(state),
    isAuth: getUserAuth(state)
});


class HeaderContainer extends React.Component{

    render(){
        return <Header {...this.props}/>
    }
}
   export default connect(MapStateToProps, {logoutUser})(HeaderContainer)