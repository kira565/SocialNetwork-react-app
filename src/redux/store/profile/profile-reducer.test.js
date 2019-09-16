import {addPost, deletePost} from "./profile-reducer";
import profileReducer from "./profile-reducer";


let state = {
    postData: [
        {id: 1, message: 'Hello', like_count: 33},
        {id: 2, message: 'Hello2', like_count: 55},
        {id: 3, message: 'Post3', like_count: 36},
        {id: 4, message: 'Post4', like_count: 35},
        {id: 5, message: 'Nohomo', like_count: 32},
        {id: 6, message: 'answer?', like_count: 34}
    ],
};
let actionAdd = addPost('test post');
let actionDelete = deletePost(1);

it('ADD: length of postData should be incremented', function () {
    let newState = profileReducer(state, actionAdd);
    expect(newState.postData.length).toBe(7);

});
it('ADD: text of post should be `test post`', function () {
    let newState = profileReducer(state, actionAdd);
    expect(newState.postData[0].message).toBe('test post')
});

it('DELETE: length of postData should be decremented', function () {
    let newState = profileReducer(state, actionDelete);
    expect(newState.postData.length).toBe(5)
});

