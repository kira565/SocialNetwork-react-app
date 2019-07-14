/* eslint-disable jsx-a11y/no-redundant-roles */
/**
 * Created by Kira on 21.05.2019.
 */
import React from 'react';
import h from './Header.module.css'
import logo from '../../etc/img/logo.png'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={h.header}>
        <div className={h.logo__block}>
            <img alt='logo' src={logo}/>
        </div>

        <div className={h.login__block}>
            {props.isAuth ? <NavLink to={'/profile'}>{props.userEmail}</NavLink>
                : <NavLink to={'/login'}>Login</NavLink>}
            {props.isAuth &&
            <button onClick={props.logoutUser} className="btn btn-primary" role="button">logout</button>}
        </div>
    </header>;
};
export default Header