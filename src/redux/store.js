import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import myListReducer from "./myList/myList.reducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
    mylist: myListReducer,
  },
});
