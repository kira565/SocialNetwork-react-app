import React from 'react'
import Jobs from "./Jobs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAds, setCurrentPage, setKeyWords, setMaxSalary, setMinSalary} from "../../redux/store/jobs/jobs-reducer";


let mapStateToProps = (state) => {
    return {
        jobsData: state.jobsPage.jobsData,
        totalAdsCount: state.jobsPage.totalAdsCount,
        isFetching: state.jobsPage.isFetching,
        totalPageSize: state.jobsPage.totalPageSize,
        currentPage: state.jobsPage.currentPage,
        keyWords: state.jobsPage.keyWords,
        minSalary: state.jobsPage.minSalary,
        maxSalary: state.jobsPage.maxSalary,
    }
};

class JobsContainer extends React.Component {

    refreshJobList() {
        const {currentPage, totalPageSize, keyWords, minSalary, maxSalary, getAds} = this.props;
        getAds(currentPage, totalPageSize, keyWords, minSalary, maxSalary)
    }


    componentDidMount() {
        this.refreshJobList()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.keyWords !== this.props.keyWords ||
            prevProps.isFullTime !== this.props.isFullTime ||
            prevProps.minSalary !== this.props.minSalary ||
            prevProps.maxSalary !== this.props.maxSalary) {
            this.refreshJobList()
        }
    }

    handleSubmit = (formData) => {
        this.props.setKeyWords(formData.keyWords);
        this.props.setMinSalary(formData.minSalary);
        this.props.setMaxSalary(formData.maxSalary);
        this.props.setCurrentPage(1);
    };

    onPageChanged = (pageNumber) => {
        this.refreshJobList();
        this.props.setCurrentPage(pageNumber);
        window.scrollTo(0, 0)
    };

    render() {
        return <>
            <Jobs {...this.props} onPageChanged={this.onPageChanged} handleSubmit={this.handleSubmit}/>
        </>
    }
}

export default compose(
    connect(mapStateToProps, {getAds, setCurrentPage, setKeyWords, setMinSalary, setMaxSalary})
)(JobsContainer);