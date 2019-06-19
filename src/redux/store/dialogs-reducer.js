/**
 * Created by Kira on 29.05.2019.
 */
const SEND_MSG = 'SEND-MSG';
const UPDATE_MSG = 'UPDATE-MSG-POST';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    if (action.type === SEND_MSG) {
        return {
            ...state,
            newMsgText: '',
            messageData: [...state.messageData, {id: 9, text: state.newMsgText}] // аналогия push()
        };
    }
    else if (action.type === UPDATE_MSG) {
        return {
            ...state,
            newMsgText: action.msgText
        };
    }
    return state
};
export default dialogsReducer

export const sendMsgActionCreator = () => {
    return {
        type: SEND_MSG
    }
};
export const updateMsgTextActionCreator = (msgText) => {
    return {
        type: UPDATE_MSG,
        msgText: msgText
    }
};
