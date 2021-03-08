import * as React from "react";
import { Route } from "react-router-dom";
import FrontLayout from "./FrontLayout";

const FrontRoute = ({
  component: Component,
  ...rest
}: any & { component: any }) => {
  return (
    <FrontLayout>
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    </FrontLayout>
  );
};

export default FrontRoute;
