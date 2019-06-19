/**
 * Created by Kira on 29.05.2019.
 */
import {createStore, combineReducers} from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './users-reducer'
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    sidebar: sidebarReducer,
    userAuth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store
