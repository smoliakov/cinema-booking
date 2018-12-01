import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Schedule from './admin/Schedule';

class Routes extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <div className={'AppContainer'}>
        <BrowserRouter basename={BASENAME}>
          <Switch>
            <Route path={'/'} exact component={Main} />

            <Route path={'/admin'} exact component={Schedule} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
