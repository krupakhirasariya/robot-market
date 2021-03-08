import React, { Component } from "react";
import { Switch } from "react-router-dom";
import FrontRoute from "./FrontRoute";

/* Robot List & Cart Route Components */
import RobotList from "../robotList";
import Cart from "../cart";

/* Other Common Route Components */
import Notfound from "../common/Notfound";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <FrontRoute exact path="/" component={RobotList} />
        <FrontRoute exact path="/shopping-cart" component={Cart} />
        <FrontRoute path="*" component={Notfound} />
      </Switch>
    );
  }
}
