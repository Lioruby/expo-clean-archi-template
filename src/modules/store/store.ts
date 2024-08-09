import { useDispatch } from "react-redux";

import {
  ThunkDispatch,
  UnknownAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { Dependencies } from "./dependencies";
import { AppState } from "./app-state";

const reducers = combineReducers({});

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = ThunkDispatch<AppState, Dependencies, UnknownAction>;
export type AppGetState = AppStore["getState"];
export type ThunkApi = {
  dispatch: AppDispatch;
  state: AppState;
  extra: Dependencies;
};

export const createStore = (config: {
  initialState?: AppState;
  dependencies: Dependencies;
}) => {
  const store = configureStore({
    preloadedState: config?.initialState,
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware: any) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: config.dependencies,
        },
      });
    },
  });

  return store;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
