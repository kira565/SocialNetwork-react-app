/**
 * Created by Kira on 24.05.2019.
 */
import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import noavatar from '../../../etc/img/noavatar.png'
import ProfileStatus from "./profile_status/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={s.main_information}>
        <div className='row'>
            <div className='col-sm-5'>
                <div className={s.user_photo_container}>
                    <div className={s.user_photo}>
                        {
                            props.profile.photos.large !== null
                                ? <img src={props.profile.photos.large} alt='user_av'/>
                                : <img src={noavatar} alt='user_av'/>
                        }
                    </div>
                </div>
            </div>
            <div className='col-sm-7'>
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
                    <div className={s.header__line}>
                        <hr className="hr"/>
                        <span className={s.header__text}>main information</span>
                    </div>
                    <div className={s.user_container}>
                        <div className={s.aboutMe}><span className={s.user_contacts__header}>About me:</span>{props.profile.aboutMe}</div>
                        <div className={s.lookingForAJobDescription}><span className={s.user_contacts__header}>Looking for job:</span>{props.profile.lookingForAJobDescription}</div>
                    </div>
                    {Object.keys(props.profile.contacts).some(item => props.profile.contacts[item] !== null) && <>
                        <div className={s.header__line}>
                            <hr className="hr"/>
                            <span className={s.header__text}>contacts</span>
                        </div>
                        <div className={s.user_container}>
                            {props.profile.contacts.facebook !== null
                            && <div className={s.facebook}><span
                                className={s.user_contacts__header}>facebook:</span>{props.profile.contacts.facebook}</div>}
                            {props.profile.contacts.website !== null
                            && <div className={s.website}><span
                                className={s.user_contacts__header}>website:</span>{props.profile.contacts.website}</div>}
                            {props.profile.contacts.vk !== null
                            && <div className={s.vk}><span
                                className={s.user_contacts__header}>vk:</span>{props.profile.contacts.vk}</div>}
                            {props.profile.contacts.twitter !== null
                            && <div className={s.twitter}><span
                                className={s.user_contacts__header}>twitter:</span>{props.profile.contacts.twitter}</div>}
                            {props.profile.contacts.instagram !== null
                            && <div className={s.instagram}><span
                                className={s.user_contacts__header}>instagram:</span>{props.profile.contacts.instagram}
                            </div>}
                            {props.profile.contacts.youtube !== null
                            && <div className={s.youtube}><span
                                className={s.user_contacts__header}>youtube:</span>{props.profile.contacts.youtube}</div>}
                            {props.profile.contacts.github !== null
                            && <div className={s.github}><span
                                className={s.user_contacts__header}>github:</span>{props.profile.contacts.github}</div>}
                            {props.profile.contacts.mainLink !== null
                            && <div className={s.mainLink}><span
                                className={s.user_contacts__header}>mainLink:</span>{props.profile.contacts.mainLink}</div>}
                        </div>
                    </>}
                </div>
            </div>
        </div>
    </div>
};

export default ProfileInfo