import React from 'react'
import {Field, reduxForm} from "redux-form";
import styles from "./Jobs.module.css"

const JobsSearchForm = ({handleSubmit}) => {
    return (
        <div className={`${styles.job_form} container`}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="row">
                        <div className="col-sm-5">
                            <b>Keywords: </b><Field label={"keyWords"} name={'keyWords'} id={'InputKeyWords'}
                                                    component={"input"} type={'text'}
                                                    className="form-control"/>
                        </div>
                    </div>
                    <b>Salary: </b>
                    <div className="row">
                        <div className="col-sm-5">
                            <b>Minimal:</b>
                            <Field label={"minSalary"} name={'minSalary'} id={'salaryMin'}
                                   component={"input"} type={'number'}
                                   className="form-control"/>
                        </div>
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-5">
                            <b>Maximal:</b>
                            <Field label={"maxSalary"} name={'maxSalary'} id={'salaryMax'}
                                   component={"input"} type={'number'}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>
                <button>Search</button>
            </form>
        </div>
    )
};

const JobsReduxForm = reduxForm({
    form: 'jobs'
})(JobsSearchForm);

export default JobsReduxForm