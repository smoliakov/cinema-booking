import React, { Component } from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';

import logo from '../../assets/favicon.png';
import { APP_TITLE } from '../../configuration';
import './styles.less';

class AppHeader extends Component {
  render() {
    const b = block('AppHeader');

    return (
      <div className={b()}>
        <img src={logo} alt={APP_TITLE} className={b('logo')} />
        <div className={b('title')}>{APP_TITLE}</div>
        <i className="far fa-bell" />
      </div>
    );
  }
}

AppHeader.propTypes = {};
AppHeader.defaultProps = {};

export default AppHeader;
