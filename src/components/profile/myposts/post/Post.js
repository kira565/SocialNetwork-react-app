/**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import s from './Post.module.css'
import user_avatar_male from '../../../../etc/img/user_male.png'
import comment_icon from '../../../../etc/img/comment_icon.png'
import repost_icon from '../../../../etc/img/repost_icon.png'
import like_icon from '../../../../etc/img/like_icon.png'


const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.user_block}>
                <div className={s.user_photo}>
                    <img alt='user_avatar' src={user_avatar_male}/>
                </div>
                <div className={s.user_message}>
                    <span className={s.user_name}><a href='#'>Username</a></span>
                    <span className={s.message_date}>message_date</span>
                    <span className={s.message_text}>{props.message}</span>
                </div>
            </div>
            <div className={s.bottom_bar}>
                <div className={s.like}>
                    <span><a href="#"><img alt='like' src={like_icon}/></a></span>
                    <span>{props.like_count}</span>
                </div>
                <div className={s.comment}>
                    <span><a href="#"><img alt='like' src={comment_icon}/></a></span>
                </div>
                <div className={s.repost}>
                    <span><a href="#"><img alt='like' src={repost_icon}/></a></span>
                </div>
            </div>
        </div>

    )
};

export default Post