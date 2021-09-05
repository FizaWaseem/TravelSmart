import React from "react";
import { Grid ,Typography } from "@material-ui/core";
import Back from "../../assests/images/back.jpg";
import HomeStyles from "./styles";
import SearchSection from "../../section/SearchSelection";
const Home = () => {
  const { root, searchDiv, searchContent } = HomeStyles();
  return (
    <Grid>
      <Grid className={root}>
        <Grid className={searchDiv}>
          <Grid className={searchContent}>
             <Typography variant="h5" component="h2" color="white" style={{padding:"0px 0px 24px",color:"white",fontSize:"22px"}} >Booking Bus Ticket Now</Typography>
            <SearchSection />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
