import React from 'react';
import { hot } from 'react-hot-loader';

import 'normalize.css';
import './styles/index.less';
import Routes from './Routes';

const App = () => <Routes />;

export default hot(module)(App);