/**
 * Created by Kira on 22.05.2019.
 */
import React from 'react'
import s from './Dialogs.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Message from './message_item/Messageitem'
import Dialog from './dialog_item/Dialogitem'
import {Field, reduxForm} from 'redux-form'

const dialogElement = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                      className="form-control"
                      name={'newMsgText'}
                      component={'textarea'}
                      rows="2"
                      placeholder="Enter your message here.."
            />
        </div>
        <div className={s.msgbtn}>
            <button className={`btn btn-primary ${s.custom__btn}`}>Send</button>
        </div>
    </form>
};

const ReduxDialogElement = reduxForm({
    form: 'AddNewMessageForm'
})(dialogElement);

const Dialogs = (props) => {
    let {userData, messageData, sendMsg, msgSendSuccessfulReset} = props;

    let dialogsElemets = userData.map((el) => {
        return <Dialog user_name={el.name} key={el.id} user_id={el.id}/>
    });
    let messagesElements = messageData.map((el) => {
        return <Message message_text={el.text} key={el.id}/>
    });


    let onSendMsg = (text) => {
        sendMsg(text.newMsgText);
        msgSendSuccessfulReset()
    };


    return (
        <div className={s.content}>
            <div className="row">
                <div className="col-4 col-sm-4">
                    <div className={s.user_list}>
                        {dialogsElemets}
                    </div>
                </div>
                <div className="col-8 col-sm-6 offset-sm-2">
                    <div className={s.active_dialog}>
                        <div className={s.messages}>
                            {messagesElements}
                        </div>
                        <div className={s.addmsg}>
                            <div className="row">
                                <div className="col">
                                    <ReduxDialogElement onSubmit={onSendMsg}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs