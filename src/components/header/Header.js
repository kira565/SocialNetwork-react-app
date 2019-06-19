/**
 * Created by Kira on 21.05.2019.
 */
import React from 'react';
import h from './Header.module.css'
import logo from '../../etc/img/logo.png'
import NavLink from "react-router-dom/es/NavLink";

const Header = (props) => {
    return <header className={h.header}>
        <img src={logo}/>
        <div className={h.loginBlock}>
            { props.isAuth ? props.userLogin
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}
   export default Header