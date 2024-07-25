import { createSlice } from "@reduxjs/toolkit";

export interface IuserInfo {
  userId?: string;
  logged?: boolean;
}

const initialState: IuserInfo = {
  userId: undefined,
  logged: false,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      return {
        userId: action.payload,
        logged: true,
      };
    },
    userLogout: () => {
      return initialState;
    },
  },
});

export const { userLoggedIn, userLogout } = userSlice.actions;
export default userSlice.reducer;
