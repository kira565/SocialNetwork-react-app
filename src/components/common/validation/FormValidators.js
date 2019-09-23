import React from 'react'

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Некорректный email' : undefined;
export const required = value => value ? undefined : 'Обязательное поле';


export const renderField = ({input, label, type, meta: {touched, error, warning}}) => {
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