import React from 'react'
import styles from './Users.module.css'
import UserItem from './user_item/User-item'
import Paginator from "../common/paginators/Paginator";

const Users = (props) => {


    return <div className={styles["users-block"]}>
        {props.usersPage.map((el) => {
            return <UserItem id={el.id} key={el.id} firstName={el.name} secondName={'el.secondName'}
                             status={el.status} location={'el.location'} avatar={el.photos.small}
                             followed={el.followed}
                             follow={props.follow} unfollow={props.unfolllow} onSetUsers={props.onSetUsers}
                             toggleFollowingProgress={props.toggleFollowingProgress}
                             isFollowingInProgress={props.isFollowingInProgress}
            />
        })}
        <Paginator totalCount={props.totalUserCount}
                   totalPageSize={props.totalPageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   displayedRange={10}
        />
    </div>
};

export default Users