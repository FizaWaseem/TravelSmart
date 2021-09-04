import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Grid } from "@material-ui/core";
import InputField from "../../component/inputField";
import SearchStyles from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import Calender from "../../assests/images/calender.png";
import "./styless.css";
import CustomButton from "../../component/customButton/CustomButton";
import { BiSearchAlt } from "react-icons/bi";

const SearchSection = () => {
  const { root, Margin,inputField, icon, picker, buttonStyle } = SearchStyles();
  const [date, setDate] = useState(new Date());
  const [date1, setDates] = useState("");

  const handleCalendarClose = () => {
    setDate(date);
    console.log("Calxxx", date);
  };
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <Grid xs={12} className={root}>
      <Grid xs={12} md={3} className={Margin}>
        <InputField
          name="Departure City"
          placeholder="Departure City"
          inputClass={inputField}
        />
      </Grid>

      <Grid xs={12} md={3} className={Margin}>
        <InputField
          name="Arrival City"
          placeholder="Arrival City"
          inputClass={inputField}
        />
      </Grid>
      <Grid xs={12} md={3} className={Margin}>
        <div className={picker}>
          <DatePicker
            className="pickers"
            style={{ border: "none", width: "30%" }}
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
          <img src={Calender} className={icon} alt="cal" />
        </div>
      </Grid>
      <Grid xs={12} md={3} className={Margin}>
        <div className={picker}>
          <DatePicker
            className="pickers"
            style={{ border: "none", width: "30%" }}
            placeholderText="Return (Optional)"
            selected={date1}
            onChange={(date) => setDates(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
          <img src={Calender} className={icon} alt="cal" />
        </div>
      </Grid>
      <Grid xs={12} md={3} className={Margin}>
        <CustomButton
          buttonText="Search Buses"
          to="/listing-pages"
          className={buttonStyle}
          startIcon={<BiSearchAlt />}
        />
      </Grid>
    </Grid>
  );
};

export default SearchSection;
