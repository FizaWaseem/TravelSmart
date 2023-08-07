import React from "react";
import { Grid } from "@material-ui/core";
import InputField from "../component/inputField";
import SearchStyles from "./styles";
import CustomSelect from "../component/select";
import useForm from "./useForm";
import { fieldName } from "../utils/constants";
const DropBox = ({BoardingOnChange,DropingOnChange,InputOnChange,value,errors}) => {
  const { root, Margin, inputField } = SearchStyles();

  return (
    <>
    <Grid xs={12} className={root}>
      <Grid xs={12} md={4} className={Margin}>
        <InputField
          required={true}
          name={fieldName.email}
          placeholder="Email Required"
          inputClass={inputField}
          variant="filled"
          value={value}
          onChange={InputOnChange}
          error={errors}
        />
      </Grid>
   

      <Grid xs={12} md={4} className={Margin}>
      <CustomSelect placeholder="Boarding Points"  onChange={BoardingOnChange} />
      </Grid>
      <Grid xs={12} md={4} className={Margin} >
        <CustomSelect placeholder="Dropping Points"  onChange={DropingOnChange} />
      </Grid>
    </Grid>
    </>
  );
};

export default DropBox;
