import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Killian Mbappé" },
  { id: "2", name: "Antoine Griezmann" },
  { id: "3", name: "Kingsley Coman" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
