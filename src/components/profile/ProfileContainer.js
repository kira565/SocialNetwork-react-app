/**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux'
import {setUsersProfile} from "../../redux/store/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";



let MapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    userId: state.userAuth.userId,
});



class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.userId;
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUsersProfile(data);
            });
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let UrlProfileContainer = withRouter(ProfileContainer);
export default connect(MapStateToProps, {setUsersProfile})(UrlProfileContainer)