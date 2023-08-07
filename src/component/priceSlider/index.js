import React from "react";
import { Grid, Typography} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
const PriceSlider = ({price, value, onChange,Name }) => {
  function valuetext(value) {
    return <div> `${value}`</div>;
  }
  const marks = [
    {
      value: 0,
      label: price ? `₹${value[0]}`: `${value[0]}`,
    },
    {
      value: 100,
      label: price ? `₹${value[1]}`: `${value[1]}`,
    },
  ];
  return (
    <Grid style={{ padding: "1rem" }}>
      <Typography variant="h5" component="h2" id="range-slider" gutterBottom>
       {Name}
      </Typography>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="custom thumb label"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </Grid>
  );
};

export default PriceSlider;
