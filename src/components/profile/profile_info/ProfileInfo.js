/**
 * Created by Kira on 24.05.2019.
 */
import React from 'react'
import s from './ProfileInfo.module.css'
import wallpaperImg from '../../../etc/img/wallpaperField.jpg'
import Preloader from "../../common/preloader/Preloader";
import noavatar from '../../../etc/img/noavatar.png'
import ProfileStatus from "./profile_status/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.headerimg}
                    src={wallpaperImg}/>
            </div>
            <div className={s.main_information}>
                <div className='row'>
                    <div className='col-sm-5'>
                        <div className={s.user_photo_container}>
                            <div className={s.user_photo}>
                                {
                                    props.profile.photos.large !== null
                                        ? <img src={props.profile.photos.large} alt='photo'/>
                                        : <img src={noavatar} alt='photo'/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-5 offset-2'>
                        <div className={s.user_description}>
                            <div className={s.user_container}>
                                <div className={s.user_name}><h3>{props.profile.fullName}</h3></div>
                                <div className={s.user_status}>
                                    <ProfileStatus userId={props.userId}
                                                   AnotherUserId={props.AnotherUserId}
                                                   status={props.status}
                                                   updateStatus={props.updateStatus}
                                    />
                                </div>
                            </div>
                            <hr className="hr-three-color"/>
                            <div className={s.user_container}>
                                <div className={s.aboutMe}>About me: {props.profile.aboutMe}</div>
                                <div className={s.lookingForAJobDescription}>Looking for job: {props.profile.lookingForAJobDescription}</div>
                            </div>
                            <hr className="hr-three-color"/>
                            <div className={s.user_container}>
                                <div className={s.facebook}>{props.profile.contacts.facebook}</div>
                                <div className={s.website}>{props.profile.contacts.website}</div>
                                <div className={s.vk}>{props.profile.contacts.vk}</div>
                                <div className={s.twitter}>{props.profile.contacts.twitter}</div>
                                <div className={s.instagram}>{props.profile.contacts.instagram}</div>
                                <div className={s.youtube}>{props.profile.contacts.youtube}</div>
                                <div className={s.github}>{props.profile.contacts.github}</div>
                                <div className={s.mainLink}>{props.profile.contacts.mainLink}</div>
                            </div>
                            <hr className="hr-three-color"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo