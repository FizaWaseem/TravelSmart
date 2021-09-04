import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarCollapse from "./appBar";
import Logo from "../../assests/images/logo.png";
import HeaderStyles from "./styles";

function ButtonAppBar() {
  const { roots, navigation, logoImg } = HeaderStyles();
  return (
    <AppBar  position="static" className={navigation}>
      <Toolbar className={roots}>
        <img className={logoImg} src={Logo} alt="travel Logo" />
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;
