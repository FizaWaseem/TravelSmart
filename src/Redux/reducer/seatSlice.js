import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedSeat: [],
  sumCount: 0,

};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    addRemove: (state, action) => {
      const existingCartItem = state.SelectedSeat.find(
        (item) => item.id === action.payload
      );
      console.log("existingCartItemvalue=", existingCartItem,action.payload);
      if (existingCartItem !== undefined) {
                state.SelectedSeat = state.SelectedSeat.filter(
                    (item) =>
                        item.id !== action.payload ?
                        state.sumCount = state.sumCount - (item.fare +  item.acBus+ item.charge)
                       :null );
        
      } else {
          const newContact= {
            id:  action.payload,
            firsName: "",
            gender: "",
            surName: "",
            age: "",
            seatNo: action.payload,
            fare: 10,
            acBus: 25,
            charge: 35,
          }
        state.SelectedSeat = [...state.SelectedSeat, newContact];
        const Sum= newContact.fare +  newContact.acBus+ newContact.charge;
       state.sumCount = state.sumCount + Sum;
         console.log("sum",state.sumCount);
      }
      if(state.SelectedSeat.length===0){
        state.sumCount=0
      }
      console.log("state.SelectedSeat", state.SelectedSeat,"existingCartItem=",existingCartItem,action.payload);
    },
    Total: (state, action) => {
       
     
    }
  },
});

export const { addRemove} = seatSlice.actions;

export default seatSlice.reducer;
