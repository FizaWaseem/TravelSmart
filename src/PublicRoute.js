import React from "react";
import { Route, useHistory } from "react-router";
import Header from "./component/header/header"
const PublicRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <>
    <Header/>
  <Route {...rest} render={(props) => <Component {...props} />} />
 </> )
  ;
};

export default PublicRoute;
