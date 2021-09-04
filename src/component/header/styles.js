import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const HeaderStyles = makeStyles((theme) => ({
  roots: {
    flexGrow: 1,
    height: "80px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logoImg: {
    margin: "10px 20px",
    width: "160px",
    [theme.breakpoints.down("xs")]: {
      width: "120px",
    },
  },
  navigation: {
    backgroundColor: "white",
    //   boxShadow: "none"
  },
  toggleDrawer: {},
  appTitle: {},
  root: {
    // position: "absolute",
    // right: 0,
    boxShadow: "none",
    marginLeft: "4rem",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  buttonText: {
    textDecoration: "none",
    color: "#262339",
    minWidth: "103px",
    "&.active": {
      backgroundColor: "#fff",
      color: "#ff7f47",
    },
  },
}));

export default HeaderStyles;
