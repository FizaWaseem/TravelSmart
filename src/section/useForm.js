import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { fieldName, messages } from "../utils/constants";
export default function useForm(validateOnChange = false) {
  const history = useHistory();
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width:"100%",
      padding: ".4rem",
    }),
    option: (styles, ) => {
      return {
        ...styles,
        ":active": {
          ...styles[":active"],
          backgroundColor: "#ff7f47",
        },
        ":hover": {
          ...styles[":hover"],
          backgroundColor: "rgba(255, 127, 71,.6)",
        },
      };
    },
  };
  const [formData, setformData] = useState({
    email: "",
    mobile: "",
    emergency: "",
    IdNo: "",
    firstName: "",
    surName: "",
    age: "",
    selected: "",
  });

  const [errors, setErrors] = useState({});
  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [idProof, setIdProof] = useState("");
  const [Drooping, setDrooping] = useState("");
  const [Boarding, setBoarding] = useState("");
  const [Email, setEmail] = useState("");

  const [doj, setdate] = useState(new Date());
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const validate = (fieldValues = formData) => {
    let temp = { ...errors };
    if (fieldName.email in fieldValues) {
      temp.email = fieldValues.email.trim() === "" ? messages.isRequired : "";
    }
    if (fieldName.mobile in fieldValues) {
      temp.mobile = fieldValues.mobile.trim() === "" ? messages.isRequired : "";
    }
    if (fieldName.IdNo in fieldValues) {
      temp.IdNo = fieldValues.IdNo.trim() === "" ? messages.isRequired : "";
    }
    if (fieldName.firstName in fieldValues) {
      temp.firstName =
        fieldValues.firstName.trim() === "" ? messages.isRequired : "";
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === formData)
      return Object.values(temp).every((x) => x === "");
      console.log(errors,"as")
  };
  const handleFormSubmit = () => {
   console.log("Sd",formData)
      setLoader(true);
      // if( validate()){
      const requestBody = {
        email: formData.email,
        mobile: formData.mobile,
        emergency: formData.emergency,
        firstName: formData.firstName,
        surName: formData.surName,
        age: formData.age,
        selected: formData.selected,
        IdNo: formData.IdNo,
        idProof: idProof,
        Drooping: Drooping,
        Boarding: Boarding,
      };
      console.log("sss",idProof);
 
    setLoader(true);
    console.log("23403m", requestBody);
   
    setLoader(false);
    // history.push("/listing-pages");
   
  // }
  };
  const handleSubmit = () => {
      setLoader(true);
    const date = doj.toISOString().split("T")[0];
    const body = {
      sourceCity: sourceCity,
      destinationCity: destinationCity,
      doj: date,
    };
    setLoader(true);
    console.log("form", body);
    const dd = axios.get(
      `https://www.etravelsmart.com/bus/index.htm/getAvailableBuses?sourceCity=${sourceCity}&destinationCity=${destinationCity}&doj=${date}`
    );
    setLoader(false);
    history.push("/listing-pages");
    console.log("response", dd);
  };

  return {
    colourStyles,
    handleChange,
    sourceCity,
    setSourceCity,
    destinationCity,
    setDestinationCity,
    doj,
    setdate,
    handleSubmit,
    loader,
    formData,
    setformData,
    errors,
    setErrors,
    setIdProof,
    setBoarding,
    setDrooping,
    handleFormSubmit,
    Email,setEmail
  };
}
