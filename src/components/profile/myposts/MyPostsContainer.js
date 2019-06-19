/**
 * Created by Kira on 30.05.2019.
 */
import React from "react";
import './MyPosts.module.css'
import MyPosts from './MyPosts'
import {updatePostText, addPost} from "../../../redux/store/profile-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {   // props
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = {addPost, updatePostText};


const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default SuperMyPostContainer
