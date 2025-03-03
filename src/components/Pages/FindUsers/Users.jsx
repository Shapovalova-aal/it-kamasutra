import React from "react";
import classes from "./FindUsers.module.css";
import axios from "axios";
import userPhoto from "../../../Accetc/MockImages/user.jpg";
class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  follow = (
    <>
      <span>F</span>
      <span>o</span>
      <span>l</span>
      <span>l</span>
      <span>o</span>
      <span>w</span>
    </>
  );
  unfollow = (
    <>
      <span>U</span>
      <span>n</span>
      <span>f</span>
      <span>o</span>
      <span>l</span>
      <span>l</span>
      <span>o</span>
      <span>w</span>
    </>
  );

  render() {
    // debugger;
    return (
      <>
        <div className={classes.findUsers__title}>Find users</div>
        <div className={classes.findUsers__search__container}>
          <input type="text" placeholder="Search users" />
          <button type="button"></button>
        </div>
        <div className={classes.users__container}>
          {this.props.users.map((u) => (
            <div className={classes.user} key={u.id}>
              <div className={classes.user__img}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="photo"
                />
              </div>
              <div className={classes.user__body}>
                <div className={classes.user__name}>{u.name} </div>
                {/* <div>{u.status}</div> */}
                <div className={classes.user__city}>
                  {/* {"u.location.city"}, {"u.location.country"}, */}
                  {u.status != null ? u.status : "status missing"}
                  <span> lorem </span>
                </div>
              </div>
              {u.followed ? (
                <button
                  className={classes.btn}
                  onClick={() => {
                    this.props.unFollow(u.id);
                  }}
                >
                  <span className={classes.span_mother}>{this.unfollow}</span>
                  <span className={classes.span_mother_2}>{this.unfollow}</span>
                </button>
              ) : (
                <button
                  className={classes.btn}
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  <span className={classes.span_mother}>{this.follow}</span>
                  <span className={classes.span_mother_2}>{this.follow}</span>
                </button>
              )}
            </div>
          ))}
          <button className={classes.btn__seeMore} type="button">
            See more
          </button>
        </div>
      </>
    );
  }
}

export default Users;
