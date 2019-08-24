/**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux'
import {getProfile, getStatus, updateStatus} from "../../redux/store/profile/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfilePage, getUserId, getUserStatus} from "../../redux/store/profile/profile-selectors";




let MapStateToProps = (state) =>({
    profile: getProfilePage(state),
    status: getUserStatus(state),
    userId: getUserId(state),
});

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return <Profile anotherUserId={this.props.match.params.userId} {...this.props}/>
    }
}

export default compose(
    connect(MapStateToProps, {getProfile ,getStatus, updateStatus}),
    withRouter
)(ProfileContainer);
