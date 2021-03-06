import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Create } from "./Create";
import { List } from "./List"

export function Index() {
  let { path } = useRouteMatch();

  return (
    <>
      <h1>Vinhos</h1>
      <Switch>
        <Route component={List} path={path} exact />
        <Route component={Create} path={`${path}/create`} />
      </Switch>
    </>
  );
}