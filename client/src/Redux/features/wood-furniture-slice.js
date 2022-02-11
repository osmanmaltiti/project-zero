import { createSlice } from '@reduxjs/toolkit';

export const woodFurnitureSlice = createSlice({
  name: "woodFurniture",
  initialState: {
    pending: false, error: false,
    wood: [], furniture: []
  },
  reducers: {
    initiate: (state) => {
      state.pending = true;
    },
    getData: (state, action) => {
      const { payload } = action;
      state.pending = false;
      state.wood = payload.wood;
      state.furniture = payload.furniture;
    },
    failedGet: (state) => {
      state.pending = false;
      state.error = true;
    }
  }
});

export const { initiate, getData, failedGet } = woodFurnitureSlice.actions;
export default woodFurnitureSlice.reducer;