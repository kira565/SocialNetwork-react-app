/**
 * Created by Kira on 24.05.2019.
 */
import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import noavatar from '../../../etc/img/noavatar.png'
import ProfileStatus from "./profile_status/ProfileStatus";
import ProfileReduxForm from "./ProfileDataForm";
import edit from "../../../etc/img/settings.png"


const ProfileInfo = ({profile, savePhoto, isOwner, userId, status, updateStatus, submitProfile}) => {
    let [isInputShowed, setShowed] = useState(false);
    let [isEditMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };
    const handleShowInput = () => {
        setShowed(true)
    };
    const handleHideInput = () => {
        setShowed(false)
    };
    const handleSubmit = (formData) => {
        submitProfile(formData).then(() => {
            setEditMode(false)
        });
    };

    return (
        <div className={s.main_information}>
            <div className='row'>
                <div className='col-sm-5'>
                    <div className={s.user_photo_container} onMouseEnter={handleShowInput}
                         onMouseLeave={handleHideInput}>
                        <div className={s.user_photo}>
                            {
                                profile.photos.large !== null
                                    ? <img src={profile.photos.large} alt='user_av'/>
                                    : <img src={noavatar} alt='user_av'/>
                            }
                        </div>
                        <div className={s.user_change_photo}>
                            {
                                isOwner && isInputShowed
                                && <label className={s.custom_upload}>
                                    <input type="file" onChange={onMainPhotoSelected}/>
                                    <span>Upload new Photo</span>
                                </label>
                            }
                        </div>
                    </div>
                </div>
                <div className='col-sm-7'>
                    <div className={s.user_description}>
                        <div className={s.user_container}>
                            <div className={s.user_name}><h3>{profile.fullName}</h3></div>
                            <div className={s.user_status}>
                                <ProfileStatus userId={userId}
                                               status={status}
                                               updateStatus={updateStatus}
                                               isOwner={isOwner}
                                />
                            </div>
                            <div className={s.edit_button_container}>
                                {isOwner && !isEditMode && <button onClick={() => {
                                    setEditMode(true)
                                }}><img alt="edit" src={edit}/></button>}
                            </div>
                            <div className={s.info_block}>
                                {isEditMode ? <ProfileReduxForm profile={profile}
                                                                initialValues={profile}
                                                                onSubmit={handleSubmit}/> :
                                    <ProfileData profile={profile}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ProfileData = ({profile}) => {
    return (
        <div className={s.user_container}>
            <div className={s.looking_job}>
                <b>Looking for a job: </b><span>{profile.lookingForAJob
                ? <span className={s.looking_job__true}>yes</span>
                : <span className={s.looking_job__false}>no</span>}</span>
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>Skills: </b><span>{profile.lookingForAJobDescription}</span>
                </div>
            }
            <div>
                <b>About me: </b><span>{profile.aboutMe}</span>
            </div>
            <div>
                <b>Contacts: </b>
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactKey={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
        </div>
    )
};
const Contacts = ({contactKey, contactValue}) => {
    return (
        <div className={s.contact_container}>
            <div className={s.key_contact}><b>{contactKey}: </b></div>
            <div className={s.value_contact}><a href={contactValue}>{contactValue}</a></div>
        </div>
    )
};

export default ProfileInfo