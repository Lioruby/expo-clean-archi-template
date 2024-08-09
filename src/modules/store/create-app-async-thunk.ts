import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { Dependencies } from "./dependencies";
import { AppState } from "./app-state";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  rejectValue: string;
  extra: Dependencies;
}>();
