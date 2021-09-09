import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Grid } from "@material-ui/core";
import SearchStyles from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import Calender from "../assests/images/calender.png";
import "./styless.css";
import CustomButton from "../component/customButton/CustomButton";
import { BiSearchAlt } from "react-icons/bi";
import useForm from "./useForm";
import CitySelect from "../component/select/AsyncSelect";
const SearchSection = () => {
  const { root, Margin, selectMargin, icon, picker, buttonStyle } =
    SearchStyles();

  const [date1, setDates] = useState("");
  const {
    colourStyles,
    handleSubmit,
    setSourceCity,
    setDestinationCity,
    doj,
    setdate,
    loader,
  } = useForm();
  return (
    <Grid xs={12} className={root}>
      <Grid xs={12} md={3} className={selectMargin}>
        <CitySelect
          placeholder="Departure City"
          styles={colourStyles}
          onChange={(data) => setSourceCity(data.value)}
        />
      </Grid>
      <Grid xs={12} md={3} className={selectMargin}>
        <CitySelect
          name="destinationCity"
          placeholder="Arrival City"
          styles={colourStyles}
          onChange={(data) => setDestinationCity(data.value)}
        />
      </Grid>
      <Grid xs={12} md={3} className={Margin}>
        <div className={picker}>
          <DatePicker
            className="pickers"
            name="doj"
            style={{ border: "none", width: "30%" }}
            selected={doj}
            onChange={(date) => setdate(date)}
            formate="dd/mm/yy"
            // onCalendarClose={handleCalendarClose}
            // onCalendarOpen={handleCalendarOpen}
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

            // onCalendarClose={handleCalendarClose}
            // onCalendarOpen={handleCalendarOpen}
          />
          <img src={Calender} className={icon} alt="cal" />
        </div>
      </Grid>
      <Grid xs={12} md={3} className={Margin}>
        <CustomButton
          buttonText={loader ? "Loading..." : "Search Buses"}
          // component={NavLink}
          // to="/listing-pages"
          onClick={handleSubmit}
          className={buttonStyle}
          startIcon={loader ? null : <BiSearchAlt />}
        />
      </Grid>
    </Grid>
  );
};

export default SearchSection;
