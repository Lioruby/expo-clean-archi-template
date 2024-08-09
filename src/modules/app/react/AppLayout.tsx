import React, { Fragment } from "react";

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Fragment>{children}</Fragment>;
};
