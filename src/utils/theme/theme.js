import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: 18,
        fontWeight: 500,
        fontFamiy: "Work Sans', sans-serif",
        borderRadius:"5px",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#ff7f47",
        },
      },
    },
  //   MuiAppBar: {
  //  positionFixed: {
  //     position:" inherit"},  },
    MuiIconButton: {
      root: {
        color: "#ff7f47",
      },
    },
    MuiTextField: {
      root: {
        // margin: "10px 0",
      },
      
    },
    MuiInputBase:{
      root: {
      color:" rgba(0, 0, 0, 0.87)",
       fontFamily:"Work Sans', sans-serif",
    
  },

},
MuiOutlinedInput:{
  inputMarginDense :{
  padding: "0 14px",
   paddingTop: "15.5px",
   paddingBottom: "15.5px",
}}
  },
 

  typography: {
    fontFamiy: "Work Sans', sans-serif",
    fontWeightBold: 600,
  },
});

export default theme;
