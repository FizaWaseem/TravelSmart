import { makeStyles } from "@material-ui/core";
import Back from "../../assests/images/bac.png";
const ListingStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f6f6f6",
  },
  headText:{ margin: "0px 5px", fontSize: "18px" },
  subText:{ margin: "0px 5px", fontSize: "12px" },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  flexEnd: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  AvailText: { margin: "0px 5px", fontSize: "16px" },
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
  modifyDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1.3rem 0rem",
  },
  flexContnT: {
    display: "flex",
    justifyContent: "center",
    marginTop: ".5rem",
  },
  flexpadding: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
    padding: "0rem 2.5rem",
  },
  selectDiv:{ margin: "0.7rem 0.2rem" }
}));

export default ListingStyles;
