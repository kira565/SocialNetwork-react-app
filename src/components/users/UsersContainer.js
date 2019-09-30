/**
 * Created by Kira on 04.06.2019.
 */
import React from 'react'
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from "../../redux/store/users/users-reducer";
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {compose} from "redux";
import {
    getCurrentPage, getFetching, getFollowingInProgress,
    getTotalPageSize,
    getTotalUserCount, getUsersPage,
} from "../../redux/store/users/users-selectors";


let mapStateToProps = (state) => {
    return {
        usersPage: getUsersPage(state),
        totalUserCount: getTotalUserCount(state),
        totalPageSize: getTotalPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        isFollowingInProgress: getFollowingInProgress(state),
    }
};


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.totalPageSize)
    }



    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.totalPageSize);
        this.props.setCurrentPage(pageNumber)
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                totalPageSize={this.props.totalPageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfolllow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }

}



export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
    // withAuthHoc
)(UsersContainer);
 