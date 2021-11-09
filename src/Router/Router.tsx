import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import AddCrypto from "../Pages/AddCrypto/AddCrypto";
import SeeCrypto from "../Pages/SeeCrypto/SeeCrypto";
import Edit from "../Pages/Edit/Edit";
import Page404 from "../Pages/404/Page404";

export default function Router() {
  return (
    <BrowserRouter basename="/Crypto-Journal">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddCrypto} />
          <Route path="/see/:symbol" component={SeeCrypto} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="*" component={Page404} />
        </Switch>
    </BrowserRouter>
  );
}
