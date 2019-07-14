/**
 * Created by Kira on 22.05.2019.
 */
import React from 'react'
import s from './Dialogs.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Message from './message_item/Messageitem'
import Dialog from './dialog_item/Dialogitem'


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElemets = state.userData.map((el) => {
        return <Dialog user_name={el.name} key={el.id} user_id={el.id}/>
    });
    let messagesElements = state.messageData.map((el) => {
        return <Message message_text={el.text} key={el.id} />
    });
    let newMsgText = state.newMsgText;

    let newMessage = React.createRef();


    let onSendMsg = () => {
      props.sendMsg()
    };

    let onUpdateMsg = (e) => {
        let msgText = e.target.value;
        props.updateMsg(msgText)
    };

    return (
        <div className={s.content}>
            <div className="row">
                <div className="col-sm-4">
                    <table className={`table table-hover ${s.custom__table}`}>
                        <thred>
                            <tr>
                                <th scope="col">Name</th>
                            </tr>
                        </thred>
                        <tbody>
                        {dialogsElemets}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-6 offset-2">
                    <div className={s.activedialog}>
                        <div className={s.messages}>
                            {messagesElements}
                        </div>
                        <div className={s.addmsg}>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <textarea ref={newMessage}
                                                  className="form-control"
                                                  rows="2"
                                                  onChange={onUpdateMsg}
                                                  value={newMsgText}
                                                  placeholder="Enter your message here.."
                                        />
                                    </div>
                                    <div className={s.msgbtn}>
                                        <button onClick={onSendMsg}
                                                type="button"
                                                className={`btn btn-primary ${s.custom__btn}`}>Send</button>
                                    </div>
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