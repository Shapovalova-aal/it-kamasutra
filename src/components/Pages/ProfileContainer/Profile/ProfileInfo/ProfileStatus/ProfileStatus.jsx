import React from "react";
import classes from "./ProfileStatus.module.css";
import ButtonGray from "../../../../../UI/button/ButtonGrey/ButtonGrey";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    return (
      <div className={classes.status}>
        {this.state.editMode === true ? (
          <>
            <textarea
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              className={classes.input}
              type="text"
              value={this.props.status}
            />
            {/* <ButtonGray>send</ButtonGray> */}
          </>
        ) : (
          <div onDoubleClick={this.activateEditMode} className={classes.text}>
            {this.props.status}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
