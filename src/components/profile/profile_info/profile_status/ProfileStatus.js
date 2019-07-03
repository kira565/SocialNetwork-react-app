import React from 'react'

class ProfileStatus extends React.Component {
    state = {
      isEditMode: false
    };

    activateEditMode = () => {
        debugger;
        console.log('this:', this);
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
        return <div>
            {
                this.state.isEditMode
                    ? <div>
                        <input onBlur={this.deActivateEditMode} autoFocus={true} value={this.props.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
            }
        </div>
    }
}

export default  ProfileStatus;