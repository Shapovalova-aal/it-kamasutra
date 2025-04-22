import { Navigate } from "react-router";
import React from "react";
import { connect } from "react-redux";

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    // debugger;
    if (props.isAuth === false || props.isAuth === null)
      return <Navigate to={"/login"} />;
    return <Component {...props} />;
  };
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
