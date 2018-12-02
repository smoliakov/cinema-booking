import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Schedule from './admin/Schedule';
import AppHeader from './components/Header';

class Routes extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <BrowserRouter basename={BASENAME}>
        <div className={'AppContainer'}>
          <AppHeader />
          <Switch>
            <Route path={'/'} exact component={Main} />
            <Route path={'/admin'} exact component={Schedule} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
