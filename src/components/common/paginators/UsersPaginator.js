import React from 'react'
import styles from './UsersPaginator.module.css'

const UsersPaginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.totalPageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return  <div className={styles.pages}>
        {pages.map((el, index) => {
            return <span
                key={index}
                className={props.currentPage === el ? styles.selectedPage : undefined}
                onClick={() => {
                    props.onPageChanged(el);
                }}
            >{`${el} `}</span>
        })}
    </div>
};

export default UsersPaginator