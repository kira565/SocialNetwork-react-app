import React from 'react'
import Jobs from "./Jobs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAds} from "../../redux/store/jobs/jobs-reducer";


let mapStateToProps = () => {
    return {}
};

class JobsContainer extends React.Component {
    render() {
        return <>
            <Jobs/>
        </>
    }
}

export default compose(
    connect(mapStateToProps, {getAds})
)(JobsContainer);