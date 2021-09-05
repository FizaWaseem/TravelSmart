import { makeStyles } from "@material-ui/core";
const SearchStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection:"column"
    },
  },
  Margin:{ 
    minWidth:"177px",
    marginLeft: "1rem" ,
    [theme.breakpoints.down("xs")]: {
      margin: ".5rem 0rem" ,
    },
  },
  selectMargin:{ 
    minWidth:"217px",
    marginLeft: "1rem" ,
    [theme.breakpoints.down("xs")]: {
      margin: ".5rem 0rem" ,
    },
  },
  inputField: {
    width: "100%",
    background: "#fff",
    borderRadius: "5px",
  },
  picker: {
    position: "relative",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "5px",
  },
  icon: {
    position: "absolute",
    width: "9%",
    right: "12px",
    top: "13px",
  },
  buttonStyle: {
    backgroundColor: "#ff7f47",
    color: "white",
    fontSize: "14px",
    padding: "12.4px 20px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#ff7f47",
    },
  },
 
}));

export default SearchStyles;
