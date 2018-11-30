import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

class Routes extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <div className={'AppContainer'}>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} exact component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
