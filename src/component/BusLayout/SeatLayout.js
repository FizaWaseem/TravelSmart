import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import colorStyles from "./style";
import {useDispatch} from "react-redux";
import { addRemove } from "../../Redux/reducer/seatSlice";
const SeatLayout = () => {
  const { root } = colorStyles();
  const dispatch = useDispatch();
  const [click,setClick]=useState(true);
  const [clicks,setClicks]=useState(true);
  const [clicks3,setClick3]=useState(true);
  const handleBtn=(id)=>{
    dispatch(addRemove(id))
setClick(!click)
  }
  const handleBtn1=(id)=>{
    dispatch(addRemove(id))
setClicks(!clicks)
  }
  const handleBtn3=(id)=>{
    dispatch(addRemove(id))
setClick3(!clicks3)
  }
  return (
    <Grid>
      <Grid
        className={root}
        style={{
          position: "relative",
          height: "88%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            width: "50px",
            height: "3px",
            position: "absolute",
            top: -4,
            right: 12,
          }}
        />
        <div
          style={{
            backgroundColor: "black",
            width: "50px",
            height: "3px",
            position: "absolute",
            top: -4,
            leftt: 2,
          }}
        />
        <div style={{ margin: "0px 5px" }}>
          <div
            style={{
              backgroundColor: "red",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
            }}
          />
          <div
          onClick={()=>handleBtn('u12')}
            style={{
              backgroundColor: click===false ? "red":"green",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
              margin: "10px 3px",
            }}
          />
          <div
            style={{
              backgroundColor: "grey",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ margin: "0px 5px" }}>
          <div
            style={{
              backgroundColor: "red",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
            }}
          />
          <div
            style={{
              backgroundColor: "grey",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
              margin: "10px 3px",
            }}
          />
          <div
            style={{
              backgroundColor: "grey",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div>
          <div
            style={{
              backgroundColor: "red",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
            //   margin: "10px 3px",
            }}
          />
          <div
        onClick={()=>handleBtn1('uA34')}
            style={{
              backgroundColor: clicks===false ? "red":"green",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
              margin: "10px 3px",
            }}
          />
          <div
          onClick={()=>handleBtn3('uAE7')}
            style={{
              backgroundColor: clicks3===false ? "red":"green",
              width: "50px",
              height: "20px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "50px",
            height: "3px",
            position: "absolute",
            bottom: -4,
            right: 12,
          }}
        />
        <div
          style={{
            backgroundColor: "black",
            width: "50px",
            height: "3px",
            position: "absolute",
            bottom: -4,
            leftt: 2,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SeatLayout;
