/**
 * Created by Kira on 29.05.2019.
 */
import {createStore, combineReducers} from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './users-reducer'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import applyMiddleware from "redux/src/applyMiddleware";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    sidebar: sidebarReducer,
    userAuth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store
