import React from "react";
import { Provider } from "react-redux";
import { DependenciesProvider } from "./DependenciesProvider";
import { QueryProvider } from "./QueryProvider";
import { app } from "../main";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryProvider>
      <Provider store={app.store}>
        <DependenciesProvider dependencies={app.dependencies}>
          {children}
        </DependenciesProvider>
      </Provider>
    </QueryProvider>
  );
};
