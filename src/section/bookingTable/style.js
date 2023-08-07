import { makeStyles } from "@material-ui/core";

const tableStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "5px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    marginTop: ".1rem",
    padding: ".5rem 2rem",
    backgroundColor: "white",
  },
  infoDiv: {
    borderRadius: "5px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    marginTop: ".9rem",
    padding: "2rem",
    backgroundColor: "white",
  },
  btnDiv: {
    display: "flex",
    justifyContent: "end",
    padding: "1rem",
  },
}));

export default tableStyles;
