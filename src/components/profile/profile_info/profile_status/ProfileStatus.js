import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            isEditMode: true
        })
    };
    deActivateEditMode = () => {
        this.setState({
            isEditMode: false
        });
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e) => {
      this.setState({
          status: e.currentTarget.value
      })
    };


    render() {
        if (!this.props.AnotherUserId)
            return <div>
                {
                    this.state.isEditMode
                        ? <div>
                            <input onChange={this.onStatusChange} onBlur={this.deActivateEditMode} autoFocus={true} value={this.state.status}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'write your status'}</span>
                        </div>
                }
            </div>
        else return <div>
            {
                (!this.props.status)
                    ? <span>no status</span>
                    : <span>{this.props.status}</span>
            }
        </div>
    }
}

export default ProfileStatus;