import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeDetails from "../pages/BadgeDetailsContainer";

/*OTRA FORMA DE REDIRIGIR EL 404

import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" />*/

function App() {
  return (
    <BrowserRouter> {/* El orden de abajo arriba influye */}
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
