import { makeStyles } from "@material-ui/core";
import Back from "../../assests/images/bac.png";
const HomeStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    position: "relative",
    backgroundImage:`linear-gradient(rgba(48,79,71,.65) 100%,rgba(48,79,71,.65) 0),url(${Back})`,
  },
  backImg: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(255, 127, 71,.9)",
  },
  searchDiv: {
  position: "absolute",
  width: "100%",
  top:"84%"
},
  searchContent:{
    backgroundColor: "rgba(48,79,71,.9);",
    padding: "15px 45px 30px",
    maxWidth: "980px",
    margin: "0 auto",
    boxShadow: "0 0 64px rgb(17 17 17 / 10%)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "650px",
      },
    [theme.breakpoints.down("xs")]: {
    margin: "0 17px",
    padding: "27px",
    maxWidth: "450px",
   
    },
    
  }
 
}));

export default HomeStyles;
