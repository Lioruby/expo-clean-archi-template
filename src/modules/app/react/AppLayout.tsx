import React, { Fragment } from "react";
import AppStack from "../../navigation/AppStack";
import { StatusBar } from "react-native";

export const AppLayout: React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <AppStack />
    </Fragment>
  );
};
