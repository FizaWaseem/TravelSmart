import React, { useState } from "react";
import { Country, State, City } from "country-state-city";

export default function useForm() {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      padding: ".4rem",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        height: "50px",
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
    destinationCity: "",
    sourceCity: "",
  });
 
  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");

  const [doj, setdate] = useState(new Date());
  const handleChange = (e) => {
    const name = e.label;
    const value = e.value;
    console.log(e);
    setformData({
      ...formData,
      [name]: value,
    });
    console.log(e, "SD", formData);
  };

  const handleSubmit = () => {
    var fd = new FormData();
    fd.append("sourceCity",sourceCity);
    fd.append("destinationCity",destinationCity);
    fd.append("doj",doj);
    console.log("form",sourceCity,destinationCity,doj);
  };
  return {
    colourStyles,
    handleChange,
     sourceCity,
     setSourceCity,
    destinationCity, setDestinationCity,
    doj,
    setdate,
    handleSubmit,
  };
}
