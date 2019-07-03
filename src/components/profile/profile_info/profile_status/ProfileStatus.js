import React from 'react'

class ProfileStatus extends React.Component {
    state = {
      isEditMode: false
    };

    activateEditMode = () => {
      this.setState({
          isEditMode: true
      })
    };
    deActivateEditMode = () => {
        this.setState({
            isEditMode: false
        })
    };


    render() {
        if (!this.props.AnotherUserId)
        return <div>
            {
                this.state.isEditMode
                    ? <div>
                        <input onBlur={this.deActivateEditMode} autoFocus={true} value={this.props.status}/>
                    </div>
                    : <div>
                        {
                            (!this.props.status)
                                ? <span onDoubleClick={this.activateEditMode}>write here your status</span>
                                : <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        }
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

export default  ProfileStatus;