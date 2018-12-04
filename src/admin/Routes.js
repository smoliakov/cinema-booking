import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Schedule from './Schedule';

class Routes extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <BrowserRouter basename={BASENAME + 'admin/'}>
        <div className={'AppContainer'}>
          <Switch>
            <Route path={'/'} exact component={Schedule} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
