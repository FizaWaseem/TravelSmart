import React from "react";
import { Grid,Typography  } from "@material-ui/core";
import ColorPalette from "../Palette";
import PolicyBox from "../Palette/policyBox";
const SeatSelction = () => {
 
  return (
      <>
    <div style={{ display: "flex",margin:"1rem 0rem" }}>
    <ColorPalette/>
      <Grid>B</Grid>
     <PolicyBox/>
    </div>
    <Typography variant="h4" component="div" style={{fontSize:"13px",fontWeight:"600",color:"#CB2302",margin:"0px 1px"}}>
    Please select seat(Max 6), boarding point and enter email address to proceed.
    </Typography>
    </>
  );
};

export default SeatSelction;
