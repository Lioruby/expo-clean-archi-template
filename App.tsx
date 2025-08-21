import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { DependenciesProvider } from "./src/modules/app/react/DependenciesProvider";
import { app } from "./src/modules/app/main";
import { AppLayout } from "./src/modules/app/react/AppLayout";

export default function App() {
  return (
    <Provider store={app.store}>
      <DependenciesProvider dependencies={app.dependencies}>
        <NavigationContainer>
          <AppLayout />
        </NavigationContainer>
      </DependenciesProvider>
    </Provider>
  );
}
