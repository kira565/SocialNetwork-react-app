/* eslint-disable jsx-a11y/no-redundant-roles */
/**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import './MyPosts.module.css'
import Post from './post/Post'
import s from './MyPosts.module.css'
import {Field, reduxForm} from 'redux-form'

let AddNewPostForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
        <Field placeholder={'enter post...'} className="form-control" rows={'4'} name={'newPostText'} type={'text'} component={'textarea'}/>
        <button className="btn btn-primary">ADD</button>
    </form>
};


const PostsReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);


const MyPosts = (props) => {
    let postElements = props.postData.map((el) => {
       return <Post key ={el.id} message = {el.message} like_count = {el.like_count}/>
    });
    let onAddPost = (values) => {
      props.addPost(values.newPostText);
      props.postAddedSuccessful()
};
    return (
        <div className={s.posts_content}>
                <div className={s.text__input}>
                    <h4>My Posts</h4>
                    <PostsReduxForm onSubmit={onAddPost}/>
                </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};


export default MyPosts
