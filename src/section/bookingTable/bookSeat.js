import React, { useState} from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
  FormControlLabel,
  Divider,Typography,Grid, Button
} from "@material-ui/core";
import InfoBox from "../infoBox"
import  useForm from "../useForm"
import useTable from "./useTable";
import CustomButton from "../../component/customButton/CustomButton";
import ListingStyles from "../../pages/Listing/styles";
import InputField from "../../component/inputField";
import tableStyles from "./style";
import DropBox from "../dropBox";
import { fieldName } from "../../utils/constants";
import {useSelector} from "react-redux";
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
  {
    id: 2,
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
  const SelectedSeat = useSelector((state) => state.seat.SelectedSeat);
  const sumCount= useSelector((state) => state.seat.sumCount);
  const [records,] = useState(rows);
const{buttonStyle}=ListingStyles();
  const { TblContainer, TblHead } = useTable(records, headCells);
const {root,infoDiv,btnDiv}=tableStyles();
const {handleChange,formData,errors,setBoarding,setDrooping,handleFormSubmit,setIdProof,loader,handleBtn}=useForm();

  return (
    <>
    
    <Grid className={root}>
    <DropBox
        value={formData.email}
        errors={errors.email}
        InputOnChange={handleChange}
         BoardingOnChange={(data) => setBoarding(data.value)}
          DropingOnChange={(data) => setDrooping(data.value)}/>

      <TblContainer >
        <TblHead />
        <TableBody>
          {SelectedSeat.length>0 &&
         SelectedSeat.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <RadioGroup
                onChange={handleChange} 
                value={formData.selected}
                  row
                  aria-label="position"
                  defaultValue={item.gender}
                  name={fieldName.radio}
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
                <InputField 
                 variant="filled"
                  name={fieldName.firstName} 
                  placeholder="First Name" 
                  onChange={handleChange} 
                value={formData.firstName}  />
              </TableCell>
              <TableCell>
                <InputField 
                 variant="filled" 
                 name={fieldName.surName}
                 placeholder="Sur Name" 
                 onChange={handleChange} 
                 value={formData.surName}
                 />
              </TableCell>
              <TableCell>
                {" "}
                <InputField  
                variant="filled" 
                name={fieldName.age}
                 placeholder="Age" 
                 onChange={handleChange} 
                 value={formData.age} />
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
          {SelectedSeat.length} Seat(s) selected (Max. 6 seats) Total Fare:
        </Typography>
        <Typography>
          {" "}
          <b>Total:</b>₹{sumCount}
        </Typography>
      </Grid>
      </Grid>
    <Grid  className={infoDiv} >
     <InfoBox 
     mobileValue={formData.mobile}
     IdNoValue={formData.IdNo}
     emergencyValue={formData.emergency}
     IdProofOn={(data) => setIdProof(data.value)}
     inputOnChange={handleChange}
     
     />
     </Grid>
     <div className={btnDiv} >
       <CustomButton 
        buttonText={loader ? "Loading..." :"PROCEED TO PAYMENT"}
        className={buttonStyle}
        onClick={handleFormSubmit}
        />
     </div>
  
    </>
  );
}
