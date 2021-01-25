import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { DefalutLayout } from "layouts/Default";
import { HomePage } from "pages/index";
import { CartPage } from "pages/cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <DefalutLayout>
            <HomePage />
          </DefalutLayout>
        </Route>
        <Route path="/cart" exact>
          <DefalutLayout>
            <CartPage />
          </DefalutLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
