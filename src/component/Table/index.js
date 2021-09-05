import React, { useState, useRef } from "react";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Collapse,
  Typography,
} from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import { blue, red } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";
import { FaBusAlt } from "react-icons/fa";
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import CustomButton from "../customButton/CustomButton";
import { withStyles } from "@material-ui/core/styles";
import DialogBox from "../popup/DialogBox";
import ListingStyles from "../../pages/Listing/styles";
import BookingSeat from "../bookingTable/bookSeat";
import SeatSelction from "../bookingTable/seatSelction";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "travel", label: "Travels" },
  { id: "dept", label: "Departure" },
  { id: "arr", label: "Arrival" },
  { id: "fare", label: "Fare", disableSorting: true },
  { id: "seats", label: "Seats", disableSorting: true },
];
const rows = [
  {
    id: 1,
    travel: "Damien",
    dept: 33,
    arr: 5555,
    fare: 5555,
  },
  {
    id: 2,
    travel: "Nicolas",
    dept: "sdddf@",
    arr: 7555,
    fare: 34455,
  },
  {
    id: 3,
    travel: "Kate",
    dept: "MSSKddf@",
    arr: 8555,
    fare: 34455,
  },
  {
    id: 4,
    travel: "Sebastien",
    dept: 43,
    arr: 5555,
    fare: 34455,
  },
  {
    id: 5,
    travel: "Louise",
    dept: 33,
    arr: 5555,
    fare: 34455,
  },
  {
    id: 6,
    travel: "George",
    dept: 33,
    arr: 5555,
    fare: 34455,
  },
];
export default function BusTable() {
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);
  const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
    buttonStyle: {
      height: "30px",
      backgroundColor: red[300],
      color: "#fff",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: red[100],
        color: red[400],
      },
    },
  });
  const btnRef = useRef();

  const classes = useStyles();
  let initialTxt = "Seats";
  const [hover, sethover] = useState(true);
  const [openPopup, setPopup] = useState(false);
  const handle = (id) => {
    sethover(true);
    console.log("333---", hover, btnRef.current);
  };
  const handleOut = (id) => {
    sethover(false);
    console.log("ddd---", hover, id);
  };
  const [records, setRecords] = useState(rows);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    checked,
    setChecked,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.travel.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <>
              <TableRow
                key={item.id}
                ref={btnRef}
                onMouseOver={() => handle(item.id)}
                onMouseOut={() => handleOut(item.id)}
              >
                <TableCell>
                  <Grid
                    xs={12}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Grid xs={2} style={{ marginRight: ".4rem" }}>
                      {" "}
                      <FaBusAlt fontSize={32} />{" "}
                    </Grid>
                    <Grid>
                      <b> {item.travel}</b>
                      <br />
                      {item.travel}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid>
                    <b> {item.dept}</b>
                    <br />
                    <HtmlTooltip
                      arrow
                      TransitionComponent={Zoom}
                      title={
                        <>
                          <Typography color="inherit">
                            Tooltip with HTML
                          </Typography>
                          <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                          <u>{"amazing content"}</u>.{" "}
                          {"It's very engaging. Right?"}
                        </>
                      }
                    >
                      <Typography
                        style={{
                          marginTop: ".3rem",
                          fontSize: "14px",
                          width: "50px",
                          textDecoration: "underline",
                          textDecorationColor: "#ff7f47",
                        }}
                      >
                        Pickups
                      </Typography>
                    </HtmlTooltip>
                  </Grid>
                </TableCell>
                <TableCell>
                  {" "}
                  <Grid>
                    <b> {item.arr}</b>
                    <br />
                    <HtmlTooltip
                      arrow
                      TransitionComponent={Zoom}
                      title={
                        <>
                          <Typography color="inherit">
                            Tooltip with HTML
                          </Typography>
                          <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                          <u>{"amazing content"}</u>.{" "}
                          {"It's very engaging. Right?"}
                        </>
                      }
                    >
                      <Typography
                        style={{
                          marginTop: ".3rem",
                          fontSize: "14px",
                          width: "50px",
                          textDecoration: "underline",
                          textDecorationColor: "#ff7f47",
                        }}
                      >
                        Dropoffs
                      </Typography>
                    </HtmlTooltip>
                  </Grid>
                </TableCell>
                <TableCell>{item.fare}</TableCell>
                <TableCell>
                  <CustomButton
                    buttonText={`${item.id}${"Seats"}`}
                    style={{
                      backgroundColor: "#ff7f47",
                      color: "white",
                      fontSize: "16px",
                    }}
                    onClick={() => setChecked(true)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell key={item.id} colSpan={12} style={{ padding: 0 }}>
                  <Collapse in={checked}>
                    <Grid
                      style={{ backgroundColor: "#d6d6d6", padding: "1rem" }}
                    >
                      <div style={{ display: "flex", justifyContent: "end" }}>
                        <CustomButton
                          className={classes.buttonStyle}
                          onClick={() => setChecked(false)}
                          buttonText="x"
                        />
                      </div>
                      <SeatSelction/>
                      <BookingSeat />
                    </Grid>
                  </Collapse>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />

      <DialogBox open={openPopup} setOpenPopup={setPopup}>
        <BookingSeat />
      </DialogBox>
    </>
  );
}
