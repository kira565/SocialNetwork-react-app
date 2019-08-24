/**
 * Created by Kira on 30.05.2019.
 */
import React from "react";
import './MyPosts.module.css'
import {connect} from "react-redux";
import {addPost, postAddedSuccessful} from "../../../redux/store/profile/profile-reducer";
import MyPosts from "./MyPosts";
import {getPostData} from "../../../redux/store/profile/profile-selectors";




let mapStateToProps = (state) => {   // props
    return {
        postData: getPostData(state),
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
