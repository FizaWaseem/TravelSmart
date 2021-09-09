import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import colorStyles from './style';
const ColorPalette = () => {
    const colors = [
        {
          id: 1,
          color: "#00A651",
          status: "Available",
        },
        {
          id: 2,
          color: "#D64E89",
          status: "Available for female",
        },
        {
          id: 3,
          color: "#231F20",
          status: "Booked",
        },
        {
          id: 4,
          color: "#EF402A",
          status: "Selected",
        },
        {
          id: 5,
          color: "#A7A9AC",
          status: "Not available",
        },
      ];
      const{root,div1}=colorStyles();
    return (
        <Grid
        xs={3}
        className={root}  >
        {colors.map((i) => {
          return (
            <Grid
              xs={12}
              key={i.id}
              className={div1}
            >
              <Grid
                xs={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {" "}
                <div
                  style={{
                    backgroundColor: `${i.color}`,
                    width: "20px",
                    height: "20px",
                    borderRadius: "5px",
                  }}
                ></div>
              </Grid>
              <Grid xs={9}>
                {" "}
                <Typography
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "start",
                    fontSize:"14px"
                  }}
                >
                  {i.status}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    )
}

export default ColorPalette
