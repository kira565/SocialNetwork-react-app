import React from 'react'
import './login-page.css'
import {NavLink} from "react-router-dom";

const LoginPage = (props) => {

    return <>
        <div className='row login-form'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='inputEmail'>Email address</label>
                        <input type='email' className='form-control' id='inputEmail' aria-describedby='emailHelp'
                               placeholder="Enter email address"/>
                        <small id="emailHelp" className="form-text text-muted">Don't share your email with anyone else</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button><br/>
                    <div className='registration'>
                        <NavLink to={'/registration'}>Register account</NavLink> | <NavLink to={'/ternsofuse'}>Terns of User</NavLink>
                    </div>
                </div>
            </div>
            <div className='col-sm-4'></div>
        </div>
</>

};

export default LoginPage