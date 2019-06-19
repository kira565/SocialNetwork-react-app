/**
 * Created by Kira on 24.05.2019.
 */
import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const Dialog = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.user_id} activeClassName={s.activeLink}>{props.user_name}</NavLink>
        </div>
    )
};

export default Dialog