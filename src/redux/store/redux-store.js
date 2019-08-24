/**
 * Created by Kira on 29.05.2019.
 */
import {createStore, combineReducers} from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './users/users-reducer'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import applyMiddleware from "redux/src/applyMiddleware";
import { reducer as formReducer } from 'redux-form'
import {POST_ADDED_SUCCESSFUL_RESET} from "./profile-reducer";
import {MSG_SEND_SUCCESSFUL_RESET} from "./dialogs-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    sidebar: sidebarReducer,
    userAuth: authReducer,
    form: formReducer.plugin({
        ProfileAddNewPostForm: (state, action) => {
            switch (action.type){
                case POST_ADDED_SUCCESSFUL_RESET: {
                    return undefined;
                }
                default: return state
            }
        },
        AddNewMessageForm: (state, action) => {
            switch (action.type){
                case MSG_SEND_SUCCESSFUL_RESET: {
                    return undefined;
                }
                default: return state;
            }
        }
    })
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store
