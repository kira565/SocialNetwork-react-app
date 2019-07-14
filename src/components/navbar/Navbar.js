/**
 * Created by Kira on 21.05.2019.
 */
import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import dialogue from '../../etc/img/navbar/dialogue.png'
import profile from '../../etc/img/navbar/profile.png'
import users from '../../etc/img/navbar/users.png'
import settings from '../../etc/img/navbar/settings.png'
import news from '../../etc/img/navbar/news.png'
import music from '../../etc/img/navbar/music.png'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <span className={'icon'}><img alt={'icon_navbar'} src={profile}/></span>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <span className={'icon'}><img alt={'icon_navbar'} src={dialogue}/></span>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <span className={'icon'}><img alt={'icon_navbar'} src={users}/></span>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <span className={'icon'}><img alt={'icon_navbar'} src={news}/></span>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <span className={'icon'}><img alt={'icon_navbar'} src={music}/></span>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <span className={'icon'}><img alt={'icon_navbar'} src={settings}/></span>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar