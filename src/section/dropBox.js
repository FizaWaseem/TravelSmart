import React from "react";
import { Grid,InputAdornment } from "@material-ui/core";
import InputField from "../component/inputField";
import SearchStyles from "./styles";
import CustomSelect from "../component/select";
const DropBox = () => {
  const { root, Margin, inputField } = SearchStyles();
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#faebd7',padding:"0rem" }),
  }

  return (
    <>
    <Grid xs={12} className={root}>
      <Grid xs={12} md={4} className={Margin}>
        <InputField
        required={true}
          name="Mobile"
          placeholder="Email Required"
          inputClass={inputField}
          variant="filled"
        />
      </Grid>

      <Grid xs={12} md={4} className={Margin}>
      <CustomSelect placeholder="Boarding Points" />
      </Grid>
      <Grid xs={12} md={4} className={Margin} >
        <CustomSelect placeholder="Dropping Points" />
      </Grid>
    </Grid>
    </>
  );
};

export default DropBox;
