import React, { useState } from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import ListingStyles from "./styles";
import { GoCalendar } from "react-icons/go";
import { CgArrowLongRight } from "react-icons/cg";
import { BiCalendarCheck } from "react-icons/bi";
import CustomButton from "../../component/customButton/CustomButton";
import SearchSection from "../../section/SearchBox";
import PriceSlider from "../../component/priceSlider";
import SortingGrid from "../../component/dataGrid";
import RadioButtons from "../../component/RadioGroup";
const ListingPage = () => {
  const {
    root,
    flexCenter,
    flexEnd,
    modifyDiv,
    AvailText,
    buttonStyle,
    Margin,
    flexContnT,
  } = ListingStyles();
  const [box, setbox] = useState(false);
  const [value, setValue] = React.useState([20, 37]);
  const [time, setTime] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
       console.log("ss", value);
  };
  const handletime = (event, newValue) => {
    setTime(newValue);
       console.log("ss", time);
  };
  return (
    <Grid className={root}>
      <Grid xs={12} style={{ display: "flex", paddingTop: "1rem" }}>
        <Grid xs={12} md={5} className={flexCenter}>
          <GoCalendar fontSize={25} />
          <Typography variant="h4" style={{ margin: "0px 5px" }}>
            city 1
          </Typography>
          <CgArrowLongRight fontSize={25} />
          <Typography variant="h4" style={{ margin: "0px 5px" }}>
            city 2
          </Typography>
        </Grid>
        <Grid xs={12} md={6} className={flexEnd}>
          <BiCalendarCheck fontSize={25} />
          <Typography
            variant="h5"
            component="h2"
            color="white"
            className={AvailText}
            style={{ margin: "0px 5px", fontSize: "18px" }}
          >
            Seat Availability Calender
          </Typography>
          <CustomButton
            buttonText="Modify Search"
            className={buttonStyle}
            onClick={() => setbox(!box)}
          />
        </Grid>
      </Grid>
      {box === true ? (
        <Grid xs={12} className={modifyDiv}>
          <Grid xs={12} md={10}>
            <SearchSection />
          </Grid>
        </Grid>
      ) : null}
      <Grid className={ flexContnT}>
        <Grid xs={12} md={8} style={ {margin:"0.7rem 1rem"}}>
          <Card xs={12} md={7}>
            <SortingGrid/>
          </Card>
        </Grid>
        <Grid xs={12} md={3} >
          <Card style={ {margin:"0.7rem 0rem"}}>
            <PriceSlider price={true} Name="Price Range" value={value} onChange={handleChange} />
          </Card>
          <Card style={ {margin:"0.7rem 0rem"}}>
            <PriceSlider Name="Time Range" value={time} onChange={handletime} />
          </Card>
          <Card style={ {margin:"0.7rem 0rem"}}>
            <RadioButtons/>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListingPage;
