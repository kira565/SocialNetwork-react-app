/**
 * Created by Kira on 24.05.2019.
 */
import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const Message = (props) => {
    return (
        <div className={s.message}>{props.message_text}</div>
    )
};

export default Message