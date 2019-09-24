import React from 'react'
import './login-page.module.css'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {loginUser} from "../../redux/store/auth/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./login-page.module.css"
import {email, renderField, required} from "../common/validation/FormValidators";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <div className={style.login__form}>
        <div className='row'>
            <div className='col-12 col-sm-8 offset-sm-2'>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>}
                    <Field validate={[required, email]} label={"Email"} name={'login'} id={'InputEmail1'}
                           component={renderField} type={'text'}
                           className="form-control"/>
                    <Field validate={required} label={"Password"} name={'password'} id="InputPassword1"
                           component={renderField} type={'password'}
                           className="form-control"/>
                    <div className={'form-check'}>
                        <Field name={'rememberMe'} id="Check1" component={'input'} type={'checkbox'}
                               className="form-check-input"/>
                        <label className="form-check-label" htmlFor={'Check1'}>Remember me</label>
                    </div>
                    {captchaUrl && <img alt="captcha" src={captchaUrl}/>}
                    {captchaUrl && <Field validate={required} name="captcha" id={'InputCaptcha'} component={'input'} className="form-check-input"/>}

                    <div>
                        <button className={`btn btn-primary ${style.custom__btn}`}>Log in</button>
                    </div>
                    <div>
                        Registration coming soon. Now you can register account at <a
                        href={'https://social-network.samuraijs.com/signUp'}>SamuraiJsApi SignUp</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

};


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


let mapStateToProps = (state) => ({
    isAuth: state.userAuth.isAuth,
    captchaUrl: state.userAuth.captchaUrl
});


class LoginPage extends React.Component {

    handleSubmit = (formData) => {
        if (!this.props.isAuth) {
            this.props.loginUser(formData.login, formData.password, formData.rememberMe, formData.captcha)
        }
        else alert('you\'ve been already logged in')
    };

    render() {
        if (this.props.isAuth) return <Redirect to={'/profile'}/>;
        return <LoginReduxForm onSubmit={this.handleSubmit} captchaUrl={this.props.captchaUrl}/>
    }
}


export default connect(mapStateToProps, {loginUser})(LoginPage)



