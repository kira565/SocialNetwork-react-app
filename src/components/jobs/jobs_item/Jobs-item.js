import React, {useState} from 'react'
import styles from "./Jobs-item.module.css"
import salary from "../../../etc/img/salary.png"
import company from "../../../etc/img/enterprise.png"
import location from "../../../etc/img/map-location.png"
import arrow from  "../../../etc/img/Arrow.png"

const JobsItem = (props) => {
    let [isDesc, setDesc] = useState(false);
    let reg1 = /(<(\/?[^>]+)>)/g;

    return (
        <div className={styles.job_item_wrapper}>
            <div className={styles.title}>{props.title.replace(reg1, '')}</div>
            <div className={styles.category}>{props.category}</div>
            <div className={styles.salary}>
                <div className={styles.img}><img alt={'salary'} src={salary}/></div>
                <div className={styles.salary_min_max}>
                    <div className={styles.salary__min}>{props.salary_min}</div>
                    <div>-</div>
                    <div className={styles.salary__max}>{props.salary_max}</div>
                </div>
            </div>
            <div className={styles.location}>
                <div className={styles.img}><img alt={'location'} src={location}/></div>
                <div>{props.location}</div>
            </div>
            <div className={styles.company}>
                <div className={styles.img}><img alt={'company'} src={company}/></div>
                <div>{props.company}</div>
            </div>
            {isDesc &&
                <div>
                    <div className={styles.job_desc}>{props.description.replace(reg1, '')}</div>
                    <div className={styles.apply_job}><a href={props.applyJob} target="_blank" rel="noopener noreferrer">Apply for this job</a></div>
                    <div className={styles.date}>{props.date.replace(/[A-Z]/g, ' ')}</div>
                </div>

            }
            {isDesc
                ? <div className={styles.show_more}>
                    <button onClick={() => {
                        setDesc(false)
                    }}>Hide<img style={{transform: "rotate(180deg)"}} alt={'arrow'} src={arrow}/>
                    </button>
                </div>
                : <div className={styles.show_more}>
                    <button onClick={() => {
                        setDesc(true)
                    }}>Show More<img alt={'arrow'} src={arrow}/>
                    </button>
                </div>
            }
        </div>
    )
};
export default JobsItem