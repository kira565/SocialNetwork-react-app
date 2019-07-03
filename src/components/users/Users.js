import React from 'react'
import styles from './Users.module.css'
import UserItem from './user_item/User-item'

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.totalPageSize); // Округляем имеющиеся страницы к большему.
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div className={styles["users-block"]}>
        <div className={styles.pages}>
            {pages.map(el => {
                return <span
                    className={props.currentPage === el && styles.selectedPage}
                    onClick={() => {
                        props.onPageChanged(el);
                    }}
                >{`${el} `}</span>
            })}
        </div>
        {props.usersPage.userData.map((el) => {
            return <UserItem id={el.id} firstName={el.name} secondName={'el.secondName'}
                             status={el.status} location={'el.location'} avatar={el.photos.small}
                             followed={el.followed}
                             follow={props.follow} unfollow={props.unfolllow} onSetUsers={props.onSetUsers}
                             toggleFollowingProgress = {props.toggleFollowingProgress} isFollowingInProgress={props.isFollowingInProgress}
            />
        })}
    </div>
};

export default Users