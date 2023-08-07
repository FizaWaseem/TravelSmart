import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import ButtonAppBarCollapse from "./buttonbar";
import { NavLink } from "react-router-dom";
import HeaderStyles from "./styles";

const AppBarCollapse = () => {
  const { root, buttonText, buttonBar } = HeaderStyles();
  return (
    <div className={root}>
      <ButtonAppBarCollapse>
        <NavLink className={buttonText} to="/">
          <MenuItem>Home</MenuItem>
        </NavLink>
        <NavLink className={buttonText} to="/listing-pages">
          <MenuItem>PageListing</MenuItem>
        </NavLink>
      </ButtonAppBarCollapse>
      <div className={buttonBar} id="appbar-collapse">
        <Button
          component={NavLink}
          className={buttonText}
          to="/"
          color="inherit"
        >
          Home
        </Button>

        <Button
          component={NavLink}
          className={buttonText}
          to="/listing-pages"
          color="inherit"
        >
          PageListing
        </Button>
      </div>
    </div>
  );
};
export default AppBarCollapse;
