import React from "react";
import { Grid,InputAdornment } from "@material-ui/core";
import InputField from "../component/inputField";
import SearchStyles from "./styles";
import CustomSelect from "../component/select";
import useForm from "./useForm";
import { fieldName } from "../utils/constants";
const InfoBox = ({inputOnChange,mobileValue,emergencyValue,IdProofOn,IdNoValue}) => {
  const { root, Margin, inputField } = SearchStyles();
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#faebd7',padding:".4rem" }),
  }
  const {errors}=useForm();
  return (
    <>
    <Grid xs={12} className={root}>
      <Grid xs={12} md={4} className={Margin}>
        <InputField
          required={true}
          name={fieldName.mobile}
          placeholder="Mobile"
          inputClass={inputField}
          value={mobileValue}
          onChange={inputOnChange}
          error={errors.mobile}
          startAdornment={<InputAdornment position="start">+91</InputAdornment>}
        />
      </Grid>

      <Grid xs={12} md={4} className={Margin}>
        <InputField
          name={fieldName.emergency}
          placeholder="Emergency"
          inputClass={inputField}
          value={emergencyValue}
          onChange={inputOnChange}
          error={errors.emergency}
          startAdornment={<InputAdornment position="start">+91</InputAdornment>}
        />
      </Grid>
      <Grid xs={12} md={4} className={Margin} >
           <CustomSelect placeholder="Boarding Points"  styles={colourStyles} onChange={IdProofOn} />
      </Grid>
    </Grid>
     <Grid xs={12} md={4} style={{marginTop:".5rem",marginLeft:"1rem"}} >
        <InputField
          name={fieldName.IdNo}
          placeholder="Id Number"
          inputClass={inputField}
          value={IdNoValue}
          onChange={inputOnChange}
          error={errors.IdNo}
        />
      </Grid>
    </>
  );
};

export default InfoBox;
