import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import AddCrypto from "../Pages/AddCrypto/AddCrypto";

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddCrypto} />
          <Route path="/details/:symbol" component={AddCrypto} />
        </Switch>
    </BrowserRouter>
  );
}
