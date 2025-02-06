import React from "react";
import classes from "./FindUsers.module.css";
const FindUsers = (props) => {
  let follow = [
    { id: 1, l: "F" },
    { id: 2, l: "o" },
    { id: 3, l: "l" },
    { id: 4, l: "l" },
    { id: 5, l: "o" },
    { id: 6, l: "w" },
  ];
  let unfollow = [
    { id: 1, l: "U" },
    { id: 2, l: "n" },
    { id: 3, l: "f" },
    { id: 4, l: "o" },
    { id: 5, l: "l" },
    { id: 6, l: "l" },
    { id: 7, l: "o" },
    { id: 8, l: "w" },
  ];
  let fol = follow.map((letter) => <span key={letter.id}> {letter.l} </span>);
  let unfol = unfollow.map((letter) => <span key={letter.id}>{letter.l}</span>);
  return (
    <>
      <div className={classes.findUsers__title}>Find users</div>
      <div className={classes.findUsers__search__container}>
        <input type="text" placeholder="Search users" />
        <button type="button"></button>
      </div>
      <div className={classes.users__container}>
        {props.users.map((u) => (
          <div className={classes.user} key={u.id}>
            <div className={classes.user__img}>
              <img src={u.photoUrl} alt="photo" />
            </div>
            <div className={classes.user__body}>
              <div className={classes.user__name}>{u.fullName} </div>
              {/* <div>{u.status}</div> */}
              <div className={classes.user__city}>
                {u.location.city}, {u.location.country}
                <span> lorem </span>
              </div>
            </div>
            {u.followed ? (
              <button
                className={classes.btn}
                onClick={() => {
                  props.unFollow(u.id);
                }}
              >
                <span className={classes.span_mother}>{unfol}</span>
                <span className={classes.span_mother_2}>{unfol}</span>
              </button>
            ) : (
              <button
                className={classes.btn}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                <span className={classes.span_mother}>{fol}</span>
                <span className={classes.span_mother_2}>{fol}</span>
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
};

export default FindUsers;
