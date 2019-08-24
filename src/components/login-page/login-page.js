import React from 'react'
import './login-page.module.css'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {loginUser} from "../../redux/store/auth/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./login-page.module.css"

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Некорректный email' : undefined;
const required = value => value ? undefined : 'Обязательное поле';


const renderField = ({input, label, type, meta: {touched, error, warning}}) => {
    return <div>
        <div className={"form-group"}>
            <label>{label}</label>
            <input className={(touched && ((error && "form-control is-invalid")))
            || (touched && (!error && "form-control is-valid"))
            || "form-control"} {...input} placeholder={label} type={type}/>
            {touched && ((error && <span style={{color: 'red', fontWeight: 'bold'}}>{error}</span>)
                || (warning && <span style={{color: 'red', fontWeight: 'bold'}}>{warning}</span>))}
        </div>
    </div>
};

const LoginForm = (props) => {
    return <div className={style.login__form}>
        <div className='row'>
            <div className='col-sm-8 offset-2'>
                <form onSubmit={props.handleSubmit}>
                    {props.error && <div className="alert alert-danger" role="alert">
                        {props.error}
                    </div>}
                        <Field validate={[required, email]} label={"Email"} name={'login'} id={'InputEmail1'} component={renderField} type={'text'}
                               className="form-control"/>
                        <Field validate={required} label={"Password"} name={'password'} id="InputPassword1" component={renderField} type={'password'}
                               className="form-control"/>
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



