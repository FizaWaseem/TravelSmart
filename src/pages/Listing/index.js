import React, { useState } from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import ListingStyles from "./styles";
import { GoCalendar } from "react-icons/go";
import { CgArrowLongRight } from "react-icons/cg";
import { BiCalendarCheck } from "react-icons/bi";
import CustomButton from "../../component/customButton/CustomButton";
import SearchSection from "../../section/SearchSelection";
import PriceSlider from "../../component/priceSlider";
import RadioButtons from "../../component/RadioGroup";
import CustomSelect from "../../component/select";
import BusTable from "../../component/Table";
import Collapse from "@material-ui/core/Collapse";

const ListingPage = () => {
  const {
    root,
    headText,
    subText,
    flexCenter,
    flexStart,
    flexEnd,
    modifyDiv,
    AvailText,
    buttonStyle,
    flexpadding,
    flexContnT,
    selectDiv
  } = ListingStyles();
  const [box, setbox] = useState(false);
  const [value, setValue] = React.useState([20, 40]);
  const [time, setTime] = React.useState([0, 37]);

  const handleChange = ( newValue) => {
    setValue(newValue);
    console.log("ss", value);
  };
  const handletime = ( newValue) => {
    setTime(newValue);
    console.log("ss", time);
  };
  return (
    <Grid className={root}>
      <Grid xs={12} style={{ display: "flex", paddingTop: "1rem" }}>
        <Grid xs={12} md={5} className={flexStart}>
          <Grid>
            {" "}
            <GoCalendar fontSize={37} />
          </Grid>
          <Grid>
            <Grid style={{ display: "flex" }}>
              <Typography
                variant="h4"
                className={headText}
                
              >
                Hyderabad
              </Typography>
              <CgArrowLongRight fontSize={25} />
              <Typography
                variant="h4"
                className={headText}
              >
                Bangalore
              </Typography>
            </Grid>
            <Typography
              variant="h6"
              className={subText}
            >
              Onward : Sat, 4-Sep-2021 | 3 Buses (25 Seats Available)
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} md={6} className={flexEnd}>
          <BiCalendarCheck fontSize={25} />
          <Typography
            variant="h5"
            component="h2"
            color="white"
            className={AvailText}
            
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
      <Collapse in={box}>
        <Grid xs={12} className={modifyDiv}>
          <Grid xs={12} md={10}>
            <SearchSection />
          </Grid>
        </Grid>
      </Collapse>
      <Grid xs={12} className={flexpadding}>
        <Grid xs={3} className={selectDiv} >
          <CustomSelect isMulti={true} placeholder="BUS OPERATOR" />
        </Grid>
        <Grid xs={3} className={selectDiv}>
          <CustomSelect isMulti={true} placeholder="BUS TYPE" />
        </Grid>
        <Grid xs={3} className={selectDiv}>
          <CustomSelect isMulti={true} placeholder="BOARDING POINT" />
        </Grid>
        <Grid xs={3} className={selectDiv}>
          <CustomSelect isMulti={true} placeholder="DROPPING POINT" />
        </Grid>
      </Grid>
      <Grid className={flexContnT}>
        <Grid xs={12} md={8} style={{ margin: "0.7rem 1rem" }}>
          <Card xs={12} md={7}>
            {/* <SortingGrid /> */}
            <BusTable />
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card style={{ margin: "0.7rem 0rem" }}>
            <PriceSlider
              price={true}
              Name="Price Range"
              value={value}
              onChange={handleChange}
            />
          </Card>
          <Card style={{ margin: "0.7rem 0rem" }}>
            <PriceSlider Name="Time Range" value={time} onChange={handletime} />
          </Card>
          <Card style={{ margin: "0.7rem 0rem" }}>
            <RadioButtons />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListingPage;
