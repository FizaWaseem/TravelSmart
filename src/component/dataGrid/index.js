import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CustomButton from "../customButton/CustomButton";
import { Grid } from "@material-ui/core";
import { FaBusAlt } from "react-icons/fa";
import { withStyles } from "@material-ui/core";

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
    },
  },
})(DataGrid);
const rows = [
  {
    id: 1,
    Dept: "Damien",
    Fare: 33,
    Arr: 5555,
  },
  {
    id: 2,
    Dept: "Nicolas",
    Fare: 33,
    Arr: 5555,
  },
  {
    id: 3,
    Dept: "Kate",
    Fare: 33,
    Arr: 5555,
  },
  {
    id: 4,
    Dept: "Sebastien",
    Fare: 33,
    Arr: 5555,
  },
  {
    id: 5,
    Dept: "Louise",
    Fare: 33,
    Arr: 5555,
  },
  {
    id: 6,
    Dept: "George",
    Fare: 33,
    Arr: 5555,
  },
];

export default function SortingGrid() {
  const [sortModel, setSortModel] = React.useState([
    {
      field: "Travels",
      sort: "asc",
    },
  ]);

  const [hover, sethover] = React.useState(false);
  const handle = (id) => {
  
    if (id) return sethover(true);
  
  };
  const handleOut = (id) => {
  
    if (id) return sethover(false);
    // console.log("ddd---",hover,id)
  };
  const columns = [
    {
      field: "Travels",
      renderCell: (params, index) => (
        <Grid xs={12} style={{ display: "flex", alignItems: "center" }}>
          <Grid xs={2}>
            {" "}
            <FaBusAlt fontSize={32} />{" "}
          </Grid>
          <Grid>
            <h4> {params.getValue(params.id, "Dept")}</h4>
            {params.getValue(params.id, "Dept")}
          </Grid>
        </Grid>
      ),
      width: 220,
    },
    {
      field: "Dept",
      renderCell: (params, index) => (
        <Grid xs={12} style={{ display: "flex", alignItems: "center" }}>
          <Grid>
            <h4> {params.getValue(params.id, "Dept")}</h4>

            {params.getValue(params.id, "Dept")}
          </Grid>
        </Grid>
      ),
      width: 180,
    },
    {
      field: "Arr",
      renderCell: (params, index) => (
        <Grid xs={12} style={{ display: "flex", alignItems: "center" }}>
          <Grid>
            <h4> {params.getValue(params.id, "Arr")}</h4>

            {params.getValue(params.id, "Arr")}
          </Grid>
        </Grid>
      ),
      width: 180,
    },
    { field: "Fare",renderCell: (params, index) => (
      <Grid xs={12} style={{ display: "flex", alignItems: "center" }}>
        <Grid>
          {params.getValue(params.id, "Fare")}
        </Grid>
      </Grid>
    ), width: 110 },
    {
      field: "Seats",
      width: 140,
      renderCell: (params, index) => (
        <CustomButton
          id={params.id}
          onMouseOver={() => handle(params.id)}
          onMouseOut={() => handleOut(params.id)}
          buttonText={hover ? `Book${params.id}` : "sss"}
          style={{
            backgroundColor: "#ff7f47",
            color: "white",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#ff7f47",
            },
          }}
        />
      ),
    },
  ];
  return (
    <div style={{ height: 500, width: "100%" }}>
      <StyledDataGrid
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}
