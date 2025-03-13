import React from "react";
import classes from "./FindUsers.module.css";
import userPhoto from "../../../Accetc/MockImages/user.jpg";
import { NavLink } from "react-router";
import axios from "axios";
import { usersAPI } from "../../../API/API";

const Users = (props) => {
  let follow = (
    <>
      <span>F</span>
      <span>o</span>
      <span>l</span>
      <span>l</span>
      <span>o</span>
      <span>w</span>
    </>
  );
  let unfollow = (
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

  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={classes.findUsers__title}>Find users</div>
      <div className={classes.findUsers__search__container}>
        <input type="text" placeholder="Search users" />
        <button type="button"></button>
      </div>

      <div className={classes.btn__navigation}>
        <div
          className={classes.arrows_l}
          onClick={() => {
            props.setAmoundNumberPage(props.amoundNumberPage - 20);
          }}
        ></div>
        <div className={classes.btn__nav}>
          {pages
            .filter(
              (p) =>
                p <= props.amoundNumberPage && p >= props.amoundNumberPage - 20
            )
            .map((p) => {
              return (
                <span
                  key={p}
                  className={
                    props.currentPage === p
                      ? classes.selectedPage
                      : classes.pageNumber
                  }
                  onClick={() => {
                    //   this.props.setCurrentPage(p);
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </span>
              );
            })}
        </div>
        <div
          className={classes.arrows_r}
          onClick={() => {
            props.setAmoundNumberPage(props.amoundNumberPage + 20);
          }}
        ></div>
      </div>

      <div className={classes.users__container}>
        {props.users.map((u) => (
          <div className={classes.user} key={u.id}>
            <div className={classes.user__img}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="photo"
                />
              </NavLink>
            </div>
            <div className={classes.user__body}>
              <div className={classes.user__name}>{u.name} </div>
              {/* <div>{u.status}</div> */}
              <div className={classes.user__city}>
                {/* {"u.location.city"}, {"u.location.country"}, */}
                {u.status != null && u.status != ""
                  ? u.status
                  : "status missing"}
                <span> lorem </span>
              </div>
            </div>
            {u.followed ? (
              <button
                className={classes.btn}
                onClick={() => {
                  //   axios
                  //     .delete(
                  //       `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                  //       {
                  //         withCredentials: true,
                  //         headers: {
                  //           "API-KEY": "f1558e56-8f04-4e51-b35f-aecdba3a8ed8",
                  //         },
                  //       }
                  //     )
                  usersAPI.unfollow(u.id).then((resultCode) => {
                    if (resultCode == 0) {
                      props.unFollow(u.id);
                    }
                  });
                }}
              >
                <span className={classes.span_mother}>{unfollow}</span>
                <span className={classes.span_mother_2}>{unfollow}</span>
              </button>
            ) : (
              <button
                className={classes.btn}
                onClick={() => {
                  //   axios
                  //     .post(
                  //       `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                  //       {},
                  //       {
                  //         withCredentials: true,
                  //         headers: {
                  //           "API-KEY": "f1558e56-8f04-4e51-b35f-aecdba3a8ed8",
                  //         },
                  //       }
                  //     )
                  usersAPI.follow(u.id).then((resultCode) => {
                    if (resultCode == 0) {
                      props.follow(u.id);
                    }
                  });
                  // .then((response) => {
                  //   if (response.data.resultCode == 0) {
                  //     props.follow(u.id);
                  //   }
                  // });
                }}
              >
                <span className={classes.span_mother}>{follow}</span>
                <span className={classes.span_mother_2}>{follow}</span>
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

export default Users;
