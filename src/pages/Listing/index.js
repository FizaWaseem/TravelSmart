import React from 'react'
import { Grid ,Typography } from "@material-ui/core";
import ListingStyles from "./styles"
import { GoCalendar } from 'react-icons/go';
const ListingPage = () => {
    const{root}=ListingStyles(); 
    return (
    <Grid className={root}>
<GoCalendar/>

    </Grid>
    )
}

export default ListingPage
