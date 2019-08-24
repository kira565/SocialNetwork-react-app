 /**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import './Profile'
import p from './Profile.module.css'
import MyPostsContainer from './myposts/MyPostsContainer'

import ProfileInfo from './profile_info/ProfileInfo'


const Profile = (props) => {
    return (
        <div className={p.content}>
            <ProfileInfo updateStatus={props.updateStatus}
                         userId = {props.userId}
                         AnotherUserId={props.anotherUserId}
                         status={props.status}
                         profile={props.profile}/>
            <MyPostsContainer
                store = {props.store}
            />
        </div>
    )
};

export default Profile