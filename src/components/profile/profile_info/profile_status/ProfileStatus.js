import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = () => {
       setEditMode(true)
    };
    let deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    let onStatusChange = (e) => {
        setStatus(e.target.value)
    };

    if (props.isOwner) return <div>
        {
            editMode
                ? <div>
                    <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}/>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{status || 'write your status'}</span>
                </div>
        }
    </div>;
    else return <div>
        {
            (!status)
                ? <span>no status</span>
                : <span>{status}</span>
        }
    </div>;
};

export default ProfileStatus;