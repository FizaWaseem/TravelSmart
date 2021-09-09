import { combineReducers } from "@reduxjs/toolkit";
import seatSlice from "./seatSlice";


const rootReducer = combineReducers({
  seat: seatSlice,
});

export default rootReducer;
