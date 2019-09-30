import React from 'react'
import JobsItem from "./jobs_item/Jobs-item";
import Paginator from "../common/paginators/Paginator";
import styles from "./Jobs.module.css"
import Preloader from "../common/preloader/Preloader";
import JobsReduxForm from "./JobsDataForm";

const Jobs = (props) => {
    return (
        <>
            <div className={styles.jobs_block}>
                <JobsReduxForm onSubmit={props.handleSubmit}/>
                {props.isFetching
                    ? <Preloader type="init"/>
                    : <div>
                        {props.jobsData.map(el => {
                            return <JobsItem title={el.title}
                                             category={el.category.label}
                                             salary_min={el.salary_min}
                                             salary_max={el.salary_max}
                                             location={el.location.display_name}
                                             company={el.company.display_name}
                                             description={el.description}
                                             key={el.id}
                                             applyJob={el.redirect_url}
                                             date={el.created}

                            />
                        })}
                    </div>
                }
                <Paginator totalCount={props.totalAdsCount}
                           totalPageSize={props.totalPageSize}
                           currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}
                           displayedRange={10}
                />
            </div>
        </>
    )
};

export default Jobs