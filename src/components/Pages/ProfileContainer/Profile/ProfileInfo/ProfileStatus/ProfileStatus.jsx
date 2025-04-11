import React from "react";
import classes from "./ProfileStatus.module.css";
import ButtonGray from "../../../../../UI/button/ButtonGrey/ButtonGrey";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    localStatus: this.props.status,
  };

  activateEditMode = () => {
    if (this.props.userId === this.props.me) {
      this.setState({
        editMode: true,
      });
    }
  };
  deactivateEditMode = (e) => {
    if (e.currentTarget.value !== "") {
      this.setState({
        editMode: false,
      });
      this.props.updateStatus(this.state.localStatus);
    }
  };
  onStatusChange = (e) => {
    this.setState({
      localStatus: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={classes.status}>
        {/* {console.log(this.props.status, this.state.localStatus)} */}
        {this.state.editMode === true ? (
          <>
            <textarea
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              className={classes.input}
              type="text"
              value={this.state.localStatus}
            />
          </>
        ) : (
          <div onDoubleClick={this.activateEditMode} className={classes.text}>
            {!this.props.status ? "status missing" : this.props.status}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
