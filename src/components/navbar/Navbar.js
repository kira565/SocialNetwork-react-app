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
import jobs from '../../etc/img/navbar/search.png'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={s.item} to="/profile" activeClassName={s.activeLink}>
                <span className={'icon'}><img alt={'icon_navbar'} src={profile}/></span>
                <span className={`d-none d-md-block ${s.text}`}>Profile</span>
            </NavLink>
            <NavLink className={s.item} to="/dialogs" activeClassName={s.activeLink}>
                <span className={'icon'}><img alt={'icon_navbar'} src={dialogue}/></span>
                <span className={`d-none d-md-block ${s.text}`}>Messages</span>
            </NavLink>
            <NavLink className={s.item} to="/users" activeClassName={s.activeLink}>
                <span className={'icon'}><img alt={'icon_navbar'} src={users}/></span>
                <span className={`d-none d-md-block ${s.text}`}>Users</span>
            </NavLink>
            <NavLink className={s.item} to="/news" activeClassName={s.activeLink}>
                <span className={'icon'}><img alt={'icon_navbar'} src={news}/></span>
                <span className={`d-none d-md-block ${s.text}`}>News</span>
            </NavLink>
            <NavLink className={s.item} to="/jobs" activeClassName={s.activeLink}>
                <span className={'icon'}><img alt={'icon_navbar'} src={jobs}/></span>
                <span className={`d-none d-md-block ${s.text}`}>Jobs</span>
            </NavLink>
            <NavLink className={s.item} to="/music" activeClassName={s.activeLink}>
                <span className={'icon'}><img alt={'icon_navbar'} src={music}/></span>
                <span className={`d-none d-md-block ${s.text}`}>Misic</span>
            </NavLink>
            <NavLink className={s.item} to="/settings" activeClassName={s.activeLink}>
                <span className={'icon'}><img alt={'icon_navbar'} src={settings}/></span>
                <span className={`d-none d-md-block ${s.text}`}>Settings</span>
            </NavLink>
        </nav>
    )
};

export default Navbar