import React from 'react'
import './login-page.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return <div className='row'>
        <div className='col-sm-4'>
            <form onSubmit={props.handleSubmit}>
                <div className={'form-group'}>
                    <label htmlFor="InputEmail1">Email address</label>
                    <Field name={'login'} id={'InputEmail1'} component={'input'} type={'text'} className="form-control"/>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="InputPassword1">Password</label>
                    <Field name={'password'} id="InputPassword1" component={'input'} type={'password'} className="form-control" />
                </div>
                <div className={'form-check'}>
                    <Field name={'rememberMe'} id="Check1" component={'input'} type={'checkbox'} className="form-check-input"/>
                    <label className="form-check-label" htmlFor={'Check1'}>remember me</label>
                </div>
                <div><button className='btn btn-primary'>Log in</button></div>
            </form>
        </div>
    </div>
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


let LoginPage = (props) => {
    const handleSubmit = (formData) =>{
      console.log(formData)
    };

    return <LoginReduxForm onSubmit={handleSubmit}/>
};
export default LoginPage



