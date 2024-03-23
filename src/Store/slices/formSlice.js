import { createSlice } from "@reduxjs/toolkit";

const fromSlice = createSlice({
  name: "form",
  initialState: {},
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addUserInfo } = fromSlice.actions;
export default fromSlice.reducer;