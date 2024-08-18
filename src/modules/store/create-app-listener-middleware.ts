import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { Dependencies } from "./dependencies";
import { AppState } from "./app-state";
import { AppDispatch } from "./store";

export const createAppListenerMiddleware = (dependencies?: Dependencies) => {
  const listenerMiddleware = createListenerMiddleware<
    AppState,
    AppDispatch,
    Dependencies
  >({
    extra: dependencies,
  });

  return {
    middleware: listenerMiddleware.middleware,
    startAppListening: listenerMiddleware.startListening as TypedStartListening<
      AppState,
      AppDispatch,
      Dependencies
    >,
  };
};
