import React from 'react'
import {Field, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger" role="alert">
                {error}
            </div>}
            <div className={s.form_item}>
                <div className={s.form_item__title}> <b>Full Name: </b></div>
                <div className={s.form_item__field}><Field name="fullName" id="fullName" component="input" type="text"/></div>
            </div>
            <div className={s.form_item__checkbox}>
                <div className={s.form_item__title}><b>Looking for a job: </b></div>
                <div><Field name="lookingForAJob" id="lookingForAJob" component="input" type="checkbox"/></div>
            </div>
            <div className={s.form_item}>
                <div className={s.form_item__title}> <b>Skills: </b></div>
                <div className={s.form_item__field}><Field label="Looking for a job description:" name="lookingForAJobDescription" id="lookingForAJobDescription" component="input" type="text"/></div>
            </div>
            <div className={s.form_item}>
                <div className={s.form_item__title}><b>About me: </b></div>
                <div className={s.form_item__field}><Field name="aboutMe" id="aboutMe" component="input" type="text"/></div>
            </div>
            <div className={s.form_item__contacts}>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return <div>
                    <b>{key}: </b>
                        <Field name={`contacts.${key}`} id={`contacts.${key}`} component="input" type="text"/>
                    </div>
                })}
            </div>
            <div><button>Save</button></div>
        </form>
    )
};

const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileDataForm);

export default ProfileReduxForm