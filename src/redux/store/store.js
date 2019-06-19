/**
 * Created by Kira on 24.05.2019.
 */
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello, bro?', like_count: 33},
                {id: 2, message: 'what about cup of rage??', like_count: 55},
                {id: 3, message: 'flame you hard ha-ha?', like_count: 36},
                {id: 4, message: 'no likes for you?', like_count: 35},
                {id: 5, message: 'yo?', like_count: 32},
                {id: 6, message: 'answer?', like_count: 34}
            ],
            newPostText: ''
        },
        dialogsPage: {
            userData: [
                {id: 1, name: 'Victoria'},
                {id: 2, name: 'Denis'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'VladisLove'},
                {id: 5, name: 'Alexander'},
                {id: 6, name: 'Alexey'}
            ],
            messageData: [
                {id: 1, text: 'hi hey hello!'},
                {id: 2, text: 'let me guide you'},
                {id: 3, text: 'nothing special'},
                {id: 4, text: 'smoker bomb'},
                {id: 5, text: 'react is awesome'},
                {id: 6, text: 'did u saw YAK 2019?'},
            ],
            newMsgText: ''
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log('rerendered');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    },
};


export default store