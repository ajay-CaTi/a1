import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS

      // Vanilla Redus old redux Do not mutate state and return state is must
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState

      // REDUX didn;t give optionn
      // But now we have to mutate the state DOnot require to return state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      state.items.length = 0; // originalState = []

      // return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

// Export actions
// Export Reducers

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// when we are writing styles we craete multiple reducers corresponding to actions
