/**
 * Created by Kira on 30.05.2019.
 */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Dialogs from './Dialogs'
import {sendMsgActionCreator, updateMsgTextActionCreator} from "../../redux/store/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthHoc} from "../../hoc/withAuthHoc";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthHoc
)(Dialogs);