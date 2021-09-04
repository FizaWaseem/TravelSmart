import { Suspense } from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { publicRoutes } from "./utils/paths";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  const _publicRoutes = Object.values(publicRoutes);

  return (
    <Suspense fallback={<Typography styles="h4">Loading....</Typography>}>
      <Router>
        <Switch>
          {_publicRoutes.map((route, index) => (
            <PublicRoute
              path={route.path}
              component={route.component}
              key={`route-${route.name}`}
              exact
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
