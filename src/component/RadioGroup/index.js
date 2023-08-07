import * as React from 'react';
import {Radio,Grid,RadioGroup,FormControlLabel,FormControl,Typography} from '@material-ui/core';


export default function RadioButtons({defaultValue,value}) {
  return (
    <Grid style={{ padding: "1rem" }}>
    <FormControl component="fieldset"> 
      <Typography variant="h5" component="h2" id="range-slider" gutterBottom>
      Days
      </Typography>
      <RadioGroup
        aria-label="days"
        defaultValue="Friday"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Friday" control={<Radio  />} label="Friday 04-09-2021" />
        <FormControlLabel value="Saturday" control={<Radio />} label="Saturday 05-09-2021" />
        <FormControlLabel value="Sunday" control={<Radio />} label="Sunday 06-09-2021" />
        <FormControlLabel value="Monday" control={<Radio />} label="Monday 07-09-2021" />
        <FormControlLabel value="Tuesday" control={<Radio />} label="Tuesday 08-09-2021" />
        <FormControlLabel value="Wednesday" control={<Radio />} label="Wednesday 09-09-2021" />
        <FormControlLabel value="Thursday" control={<Radio />} label="Thursday 10-09-2021" />

      </RadioGroup>
    </FormControl>
    </Grid>
  );}