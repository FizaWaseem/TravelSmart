import React from 'react'
import { Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
const CustomButton = ({startIcon,to,buttonText,className}) => {
    return (
        <Button component={NavLink} to={to} className={className} variant="contained" color="inherit"  startIcon={startIcon}>
      {buttonText}
      </Button>
    )
}

export default CustomButton
