import React from "react";
import { Grid,InputAdornment } from "@material-ui/core";
import InputField from "../component/inputField";
import SearchStyles from "./styles";
import CustomSelect from "../component/select";
const InfoBox = () => {
  const { root, Margin, inputField } = SearchStyles();
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#faebd7',padding:".4rem" }),
  }

  return (
    <>
    <Grid xs={12} className={root}>
      <Grid xs={12} md={4} className={Margin}>
        <InputField
        required={true}
          name="Mobile"
          placeholder="Mobile"
          inputClass={inputField}
          startAdornment={<InputAdornment position="start">+91</InputAdornment>}
        />
      </Grid>

      <Grid xs={12} md={4} className={Margin}>
        <InputField
          name="Emergency"
          placeholder="Emergency"
          inputClass={inputField}
          startAdornment={<InputAdornment position="start">+91</InputAdornment>}
        />
      </Grid>
      <Grid xs={12} md={4} className={Margin} >
        <CustomSelect placeholder="Select Id Proof"  styles={colourStyles} />
      </Grid>
    </Grid>
     <Grid xs={12} md={4} style={{marginTop:".5rem",marginLeft:"1rem"}}>
        <InputField
          name="Id Number"
          placeholder="Id Number"
          inputClass={inputField}
        />
      </Grid>
    </>
  );
};

export default InfoBox;
