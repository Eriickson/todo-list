import { Switch, Route } from "react-router-dom";

// Pages
import { Ping, Pong } from "./core/pages";

const RouterLocal = () => {
  return (
    <Switch>
      <Route path="/pong" component={Pong} />
      <Route to="/ping" component={Ping} />
    </Switch>
  );
};

export default RouterLocal;
