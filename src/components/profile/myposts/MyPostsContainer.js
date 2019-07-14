/**
 * Created by Kira on 30.05.2019.
 */
import React from "react";
import './MyPosts.module.css'
import {connect} from "react-redux";
import {addPost, postAddedSuccessful} from "../../../redux/store/profile-reducer";
import MyPosts from "./MyPosts";




let mapStateToProps = (state) => {   // props
    return {
        postData: state.profilePage.postData,
    }
};
class MyPostsContainer extends React.Component {
    handleSubmit(formData) {
       this.props.addPost(formData.newPostText);
       //reset
    }
    render(){
        return <MyPosts postAddedSuccessful={this.props.postAddedSuccessful} onSubmit = {this.handleSubmit} {...this.props}/>
    }
}

export default connect(mapStateToProps, {addPost, postAddedSuccessful})(MyPostsContainer);
