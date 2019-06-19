/**
 * Created by Kira on 30.05.2019.
 */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Dialogs from './Dialogs'
import {sendMsgActionCreator, updateMsgTextActionCreator} from "../../redux/store/dialogs-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => {
            dispatch(sendMsgActionCreator())
        },
        updateMsg: (msgText) => {
            dispatch(updateMsgTextActionCreator(msgText))
        }

    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;