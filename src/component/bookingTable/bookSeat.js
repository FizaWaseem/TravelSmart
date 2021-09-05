import React, { useState, useRef } from "react";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Card,
  RadioGroup,
  Radio,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import InfoBox from "../../section/infoBox"
import Zoom from "@material-ui/core/Zoom";
import { Grid } from "@material-ui/core";
import { FaBusAlt } from "react-icons/fa";
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import CustomButton from "../customButton/CustomButton";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import DialogBox from "../popup/DialogBox";
import ListingStyles from "../../pages/Listing/styles";
import RadioButtons from "../RadioGroup";
import InputField from "../inputField";
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
  { id: "gender", label: "Gender" },
  { id: "firsName", label: "Name" },
  { id: "surName", label: "SurName" },
  { id: "age", label: "Age" },
  { id: "seatNo", label: "Seat No." },
  { id: "fare", label: "Base Fare" },
  { id: "charge", label: "Op Service Charge" },
  { id: "AC Bus", label: "AC Bus" },
];
const rows = [
  {
    id: 1,
    firsName: "Damien",
    gender: "female",
    surName: 33,
    age: 5,
    seatNo: 5555,
    fare: 5555,
    acBus: 5555,
    charge: 5555,
  },
];
export default function BookingSeat() {
  const [records, setRecords] = useState(rows);
const{buttonStyle}=ListingStyles();
  const { TblContainer, TblHead } = useTable(records, headCells);

  return (
    <>
     <form>
    <Grid style={{borderRadius:"5px", border:"1px solid rgba(0, 0, 0, 0.12)",marginTop:".1rem",padding:".5rem 2rem"}}>
      <TblContainer >
        <TblHead />
        <TableBody>
          {rows.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <RadioGroup
                  row
                  aria-label="position"
                  defaultValue={item.gender}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio size="small" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" />}
                    style={{ fontSize: "14px" }}
                    label="Female"
                  />
                </RadioGroup>
              </TableCell>
              <TableCell>
                <InputField placeholder="First Name" />
              </TableCell>
              <TableCell>
                <InputField name="Sur Name" placeholder="Sur Name" />
              </TableCell>
              <TableCell>
                {" "}
                <InputField placeholder="Age" />
              </TableCell>
              <TableCell>{item.seatNo}</TableCell>
              <TableCell>₹{item.charge}</TableCell>
              <TableCell>₹{item.fare}</TableCell>
              <TableCell>₹{item.acBus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    
      <Divider />
      <Grid xs={12} style={{ display: "flex" }}>
        <Typography style={{ flexGrow: 1 }}>
          3 Seat(s) selected (Max. 6 seats) Total Fare:
        </Typography>
        <Typography>
          {" "}
          <b>Total:</b>₹4444
        </Typography>
      </Grid>
      </Grid>
    <Grid style={{borderRadius:"5px", border:"1px solid rgba(0, 0, 0, 0.12)",marginTop:".9rem",padding:"2rem"}}>
     <InfoBox/>
     </Grid>
     <div style={{display:"flex",justifyContent: "end",padding:"1rem"}}>
       <CustomButton buttonText="PROCEED TO PAYMENT" className={buttonStyle}/>
     </div>
    </form>
    </>
  );
}
