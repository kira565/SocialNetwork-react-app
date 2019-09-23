import React from 'react'
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger" role="alert">
                {error}
            </div>}
            <div>
                <b>Full Name: </b>
                <Field name="fullName" id="fullName" component="input" type="text"/>
            </div>
            <div>
                <b>Looking for a job: </b>
                <Field name="lookingForAJob" id="lookingForAJob" component="input" type="checkbox"/>
            </div>
            <div>
                <b>Skills: </b>
                <Field label="Looking for a job description:" name="lookingForAJobDescription" id="lookingForAJobDescription" component="input" type="text"/>
            </div>
            <div>
                <b>About me: </b>
                <Field name="aboutMe" id="aboutMe" component="input" type="text"/>
            </div>
            <div>
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