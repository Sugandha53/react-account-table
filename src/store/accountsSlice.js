import { createSlice } from "@reduxjs/toolkit";
import { accountsData } from "../data/accountsData";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    data: accountsData,
  },
  reducers: {
    setAccounts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setAccounts } = accountsSlice.actions;
export default accountsSlice.reducer;
