import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth
    }
};

// Обертка withAuthHoc - редиректит на страничку логина, по логике "если пользователь не залогинен" при попытке перейти в данную компоненту
export const withAuthHoc = (Component) => {

    class withAuthWrapper extends React.Component {
        render(){
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let withAuthWrapperConnected = connect(mapStateToProps)(withAuthWrapper);
    // Реализован коннект внутри хока, чтоб получить isAuth здесь, а не внутри компоненты.

    return withAuthWrapperConnected;
};


