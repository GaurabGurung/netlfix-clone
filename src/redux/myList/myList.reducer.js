import { createSlice } from "@reduxjs/toolkit";

export const mylistSlice = createSlice({
  name: "mylist",
  initialState: {
    mylist: [],
  },
  reducers: {
    addToMyList: (state, action) => {
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    },
    removeFromMyList: (state, action) => {
      return {
        ...state,
        mylist: state.mylist.filter((movie) => movie.id !== action.payload.id),
      };
    },
  },
});

export const { addToMyList, removeFromMyList } = mylistSlice.actions;

export const selectMyList = (state) => state.mylist.mylist;

export default mylistSlice.reducer;
