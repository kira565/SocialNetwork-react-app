/* eslint-disable jsx-a11y/no-redundant-roles */
/**
 * Created by Kira on 21.05.2019.
 */
import React from "react";
import './MyPosts.module.css'
import Post from './post/Post'
import s from './MyPosts.module.css'


const MyPosts = (props) => {

    let postElements = props.postData.map((el) => {
       return <Post message = {el.message} like_count = {el.like_count}/>
    });

    let newPostElem = React.createRef();


    let onAddPost = () => {  //те же функции только колбеки из обертки без лишней информации.
        props.addPost();

    };
    let onPostChange = () => {
       let text = newPostElem.current.value;
       props.updatePostText(text);
    };


    return (
        <div className={s.posts_content}>
                <div className={s.text__input}>
                    <h4>My Posts</h4>
                        <textarea ref={newPostElem} placeholder="Write here your post..."
                                  className="form-control"
                                  rows="3"
                                  onChange={ onPostChange }
                                  value={props.newPostText}
                        />
                    <div>
                        <button onClick={ onAddPost } className="btn btn-primary" role="button">ADD</button>
                    </div>
                </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};


export default MyPosts
