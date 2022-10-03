import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { resolve } from "path";
import { RootState } from "../store";

type StateProps = {
  count: number;
};
const defaultState: StateProps = { count: 10 };

export const addAsyns = createAsyncThunk('example/addAsync',async ()=>{    //add async for use await ประกาศชื่อหัวของlog
    await new Promise(resolve => setTimeout(resolve,1000));
    return 1;

});

const exampleSlice = createSlice({
  name: "example",
  initialState: defaultState,
  reducers: {
    add: (state, action: PayloadAction<void>) => {
      state.count = state.count + 1;
    },
    reset: (state, action: PayloadAction<number>) => {
        state.count = action.payload;
      },
  }, // used to update state in synchronous
  extraReducers: (builder) => {
    builder.addCase(addAsyns.fulfilled, (state, action) => {
        state.count = state.count + action.payload;
    })

  }, // usd to update state in asynchronous
});

export const { add,reset } = exampleSlice.actions;
export const exampleSelector = (state: RootState) => state.exampleReducer;
export default exampleSlice.reducer;