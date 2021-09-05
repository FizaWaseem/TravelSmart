import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import colorStyles from './style';
import { BsInfoCircleFill } from "react-icons/bs";
const PolicyBox = () => {
    const{root,div1,flexCenter,textStyle}=colorStyles();
    const policy = [
        {
            id: 1,
            cutOff: "Cut Off Time",
            return: "Return Amount",
          },
        {
            id: 2,
            cutOff: "(Before Dep Hours)",
            return: "(%)",
          },
        {
          id: 3,
          cutOff: "0-12",
          return: "0",
        },
        {
          id: 4,
          cutOff: "12-24",
          return: "50",
        },
        {
          id: 5,
          cutOff: "24-48",
          return: "75",
        },
        {
          id: 6,
          cutOff: "48 Hrs",
          return: "100",
        }
      ];
    return (
       <Grid xs={3}>
        <Grid
        xs={12}
        className={root} >
          <Grid
              xs={12}
              className={div1} style={{marginBottom:".5rem"}} >
              <Grid
                xs={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {" "}
              <BsInfoCircleFill color="#ff7f47" style={{fontSize:"19px",}}/>
              </Grid>
              <Grid xs={9}>
                {" "}
                <Typography
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  Cancellation Policy
                </Typography>
              </Grid>
            </Grid>
           {policy.map(i=>{
               return(
                <Grid
                xs={12}
                className={div1}  >
                <Grid
                  xs={6}
                  className={flexCenter}>
                  {" "}
               {i.cutOff}
                </Grid>
                <Grid xs={6}>
                  {" "}
                  <Typography
                     className={flexCenter}
                  >
                   {i.return}
                  </Typography>
                </Grid>
              </Grid>
               )
           })}
         
        </Grid>
        <Typography variant="h4" component="div" className={textStyle}>
           Partial cancellation is not allowed.
           </Typography>
        </Grid>
    )
}

export default PolicyBox;
