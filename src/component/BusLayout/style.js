import { makeStyles } from "@material-ui/core";

const colorStyles = makeStyles((theme) => ({
root:{
    backgroundColor: "white",
    borderRadius: "6px",
    padding: ".4rem",
    alignSelf:"center"
  },
  div1:{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom:".2rem"
  },
  flexCenter:{ display: "flex", justifyContent: "center", fontSize:"12px" },
textStyle:{fontSize:"14px",fontWeight:"600",color:"#CB2302"},
}));
export default colorStyles;