import React from 'react'
import './login-page.module.css'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {loginUser} from "../../redux/store/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./login-page.module.css"


const LoginForm = (props) => {
    return <div className={style.login__form}>
        <div className='row'>
            <div className='col-sm-8 offset-2'>
                <form onSubmit={props.handleSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor="InputEmail1">Email address</label>
                        <Field name={'login'} id={'InputEmail1'} component={'input'} type={'text'}
                               className="form-control"/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="InputPassword1">Password</label>
                        <Field name={'password'} id="InputPassword1" component={'input'} type={'password'}
                               className="form-control"/>
                    </div>
                    <div className={'form-check'}>
                        <Field name={'rememberMe'} id="Check1" component={'input'} type={'checkbox'}
                               className="form-check-input"/>
                        <label className="form-check-label" htmlFor={'Check1'}>Remember me</label>
                    </div>
                    <div>
                        <button  className={`btn btn-primary ${style.custom__btn}`}>Log in</button>
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
    isAuth: state.userAuth.isAuth
});

class LoginPage extends React.Component {

    handleSubmit = (formData) => {
        if (!this.props.isAuth) {
            this.props.loginUser(formData.login, formData.password, formData.rememberMe)
        }
        else alert('you are already logged in')
    };

    render() {
        if (this.props.isAuth) return <Redirect to={'/profile'}/>;
        return <LoginReduxForm onSubmit={this.handleSubmit}/>
    }
}


export default connect(mapStateToProps, {loginUser})(LoginPage)



