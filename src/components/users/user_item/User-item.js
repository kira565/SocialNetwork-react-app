import React from 'react'
import './User-item.css'
import userPhoto from '../../../etc/img/user_male.png'
import NavLink from "react-router-dom/es/NavLink";


const UserItem = (props) => {
    return <div className="users-block__elem users-block__elem1">
        <div className="ava-btn-container text-center">
            <div className="users-avatar users-avatar__elem1">
                <NavLink to={'/profile/' + props.id}>{
                    props.avatar !== null ?
                        <img alt='ava' src={props.avatar}/> :
                        <img alt='ava' src={userPhoto}/>
                }
                </NavLink>
            </div>
            <div>
                {props.followed ?
                    <button disabled={props.isFollowingInProgress.some(id => id === props.id)} type="button" className="btn btn-success active"
                            onClick={() => {props.unfollow(props.id)
                            }}>Unfollow</button> :
                    <button disabled={props.isFollowingInProgress.some(id => id === props.id)} type="button" className="btn btn-success"
                            onClick={() => {props.follow(props.id)}}>Follow</button>
                }
            </div>
        </div>
        <div className="users-container users-container__elem1">
            <div className="full-name">
                <NavLink to={'/profile/' + props.id}>
                    <span className="font-weight-bold">{props.firstName}</span>
                </NavLink>
                <div className="status">{props.status}</div>
            </div>
          {/*  <div className="row">
                <div className="col-md-4">
                    <div className="full-name">
                        <NavLink to={'/profile/' + props.id}>
                            <span className="font-weight-bold">{props.firstName + ' '}</span>
                            <span className="font-weight-bold">{props.secondName}</span>
                        </NavLink>
                    </div>
                    <div className="status">{props.status}</div>
                </div>
                <div className="col-md-4 offset-4">
                    <div className="locaton">
                        <div className="country">{props.location.country}</div>
                        <div className="city">{props.location.city}</div>
                    </div>
                </div>
            </div>*/}
        </div>
    </div>
};

export default UserItem