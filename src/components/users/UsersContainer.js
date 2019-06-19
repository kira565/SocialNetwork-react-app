/**
 * Created by Kira on 04.06.2019.
 */
import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleFetcher, toggleFollowingProgress
} from "../../redux/store/users-reducer";
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {usersAPI} from "../../api/api";




let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        totalUserCount: state.usersPage.totalUserCount,
        totalPageSize: state.usersPage.totalPageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
};

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetcher(true);
        usersAPI.getUsers(this.props.currentPage, this.props.totalPageSize)
            .then(data => {
                this.props.toggleFetcher(false);
                this.onSetUsers(data.items);
                this.onSetUsersTotalCount(data.totalCount);

            });
    }


    onSetUsers = (users) => {
        this.props.setUsers(users)
    };
    onSetUsersTotalCount = (count) => {
        this.props.setUsersTotalCount(count)
    };
    onSetCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleFetcher(true);
        this.onSetCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.totalPageSize)
            .then(data => {
                this.props.toggleFetcher(false);
                this.onSetUsers(data.items);
            });
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
                onFollow={this.props.follow}
                onUnfolllow={this.props.unfollow}
                toggleFollowingProgress ={this.props.toggleFollowingProgress}
                isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }

}


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleFetcher, toggleFollowingProgress})(UsersContainer);
