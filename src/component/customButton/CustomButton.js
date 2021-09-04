import React from 'react'
import { Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
const CustomButton = ({id,startIcon,to,buttonText,onMouseOver,onMouseOut,className,component,onClick,style}) => {
    return (
        <Button id={id} onMouseOver={onMouseOver} 
        onMouseOut={onMouseOut}  component={component} to={to} className={className} style={style} onClick={onClick} variant="contained" color="inherit"  startIcon={startIcon}>
      {buttonText}
      </Button>
    )
}

export default CustomButton
