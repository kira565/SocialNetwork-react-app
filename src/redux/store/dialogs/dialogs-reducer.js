/**
 * Created by Kira on 29.05.2019.
 */
const SEND_MSG = 'SEND-MSG';
export const MSG_SEND_SUCCESSFUL_RESET = 'MSG_SEND_SUCCESSFUL_RESET';

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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MSG: {
            return{
                ...state,
                messageData: [...state.messageData, {id: 9, text: action.newMsgText}] // аналогия push()
            }
        }
        default: return state
    }
};
export default dialogsReducer

export const sendMsg = (newMsgText) => ({type: SEND_MSG, newMsgText});
export const msgSendSuccessfulReset = () => ({type: MSG_SEND_SUCCESSFUL_RESET});

