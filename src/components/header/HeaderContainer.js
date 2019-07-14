/**
 * Created by Kira on 21.05.2019.
 */
import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux'
import {getUserAuthData} from "../../redux/store/auth-reducer";



let MapStateToProps = (state) => ({
    userId: state.userAuth.userId,
    userLogin: state.userAuth.userLogin,
    userEmail: state.userAuth.userEmail,
    isAuth: state.userAuth.isAuth

});


class HeaderContainer extends React.Component{
    componentDidMount () {
        this.props.getUserAuthData();
    }
    componentDidUpdate() {
        this.props.getUserAuthData();
    }

    render(){
        return <Header {...this.props}/>
    }
}
   export default connect(MapStateToProps, {getUserAuthData})(HeaderContainer)