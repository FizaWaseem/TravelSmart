import { makeStyles } from "@material-ui/core";
import Back from "../../assests/images/bac.png";
const ListingStyles = makeStyles((theme) => ({
  root: {
   backgroundColor:"#f6f6f6"
  },
  flexCenter:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexEnd:{
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  AvailText:{ margin: "0px 5px",fontSize:"16px" },
  buttonStyle: {
    backgroundColor: "#ff7f47",
    color: "white",
    fontSize: "14px",
    padding: "7.4px 10px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#ff7f47",
    },
  },
 modifyDiv:{
  display:"flex",justifyContent:"center",alignItems:"center",margin:"1.3rem 0rem"
 },
 flexContnT:{
  display: "flex",
  justifyContent: "center",
marginTop:"1.5rem"
},
}));

export default ListingStyles;
