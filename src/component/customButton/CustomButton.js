import React from 'react'
import { Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
const CustomButton = ({ref,id,startIcon,to,buttonText,onMouseOver,onMouseOut,className,component,onClick,style}) => {
    return (
        <Button ref={ref} id={id} onMouseOver={onMouseOver} 
        onMouseOut={onMouseOut}  component={component} to={to} className={className} style={style} onClick={onClick} variant="contained" color="inherit"  startIcon={startIcon}>
      {buttonText}
      </Button>
    )
}

export default CustomButton
