import React from "react";
import {Typography  } from "@material-ui/core";
import ColorPalette from "../../component/BusLayout/palette";
import PolicyBox from "../../component/BusLayout/policyBox";
import SeatLayout from "../../component/BusLayout/SeatLayout";
const SeatSelction = () => {
 
  return (
      <>
    <div style={{ display: "flex",margin:"1rem 0rem" ,justifyContent:"space-between"}}>
    <ColorPalette/>
     <SeatLayout/>
     <PolicyBox/>
    </div>
    <Typography variant="h4" component="div" style={{fontSize:"13px",fontWeight:"600",color:"#CB2302",margin:"0px 1px"}}>
    Please select seat(Max 6), boarding point and enter email address to proceed.
    </Typography>
    </>
  );
};

export default SeatSelction;
