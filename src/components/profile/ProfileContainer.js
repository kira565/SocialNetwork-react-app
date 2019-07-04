/**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux'
import {getProfile, getStatus, updateStatus} from "../../redux/store/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthHoc} from "../../hoc/withAuthHoc";
import {compose} from "redux";




let MapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.userAuth.userId,
});

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;

        }
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return <Profile AnotherUserId={this.props.match.params.userId} {...this.props}/>
    }
}

export default compose(
    connect(MapStateToProps, {getProfile ,getStatus, updateStatus}),
    withAuthHoc,
    withRouter
)(ProfileContainer);
