import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, AppState } from "./store";
import { Dependencies } from "./dependencies";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  rejectValue: string;
  extra: Dependencies;
}>();
