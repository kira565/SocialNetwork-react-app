 /**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import './Profile'
import p from './Profile.module.css'
import MyPostsContainer from './myposts/MyPostsContainer'

import ProfileInfo from './profile_info/ProfileInfo'


const Profile = (props) => {
    let {updateStatus, userId, anotherUserId, status, profile, store} = props;
    return (
        <div className={p.content}>
            <ProfileInfo updateStatus={updateStatus}
                         userId = {userId}
                         AnotherUserId={anotherUserId}
                         status={status}
                         profile={profile}/>
            <MyPostsContainer
                store = {store}
            />
        </div>
    )
};

export default Profile