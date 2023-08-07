import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {Dialog, DialogContent, DialogTitle,Typography} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';


import { blue,red } from '@material-ui/core/colors';
import CustomButton from '../customButton/CustomButton';
import ListingStyles from '../../pages/Listing/styles';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  buttonStyle:{
    height:"30px",
    backgroundColor: red[300],
    color:"#fff",
    fontSize:"14px",
    "&:hover": {
      backgroundColor: red[100],
      color:red[400],
    },
  }
});

export default function DialogBox(props) {
  const classes = useStyles();

  const {  children,selectedValue, open,setOpenPopup } = props;



  return (
    <Dialog  maxWidth="md" open={open}>
      <DialogTitle >
        <div style={{display:"flex"}}>
        <Typography variant="h6" component="div" style={{flexGrow:1}}>
       Book Your Seat
      </Typography>
      <CustomButton 
      className={classes.buttonStyle}
       onClick={()=>setOpenPopup(false)} 
       buttonText="x"  />
      </div>
      </DialogTitle>
      <DialogContent dividers>
      {children}
      </DialogContent>
    </Dialog>
  );
}



