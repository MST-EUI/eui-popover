import React from 'react';
import Tooltip from 'rc-tooltip';
// import i18n from './i18n';

import './style/index.scss';

// const { PropTypes } = React;

export default class Popover extends React.Component {
  static displayName = 'eui-popover';

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    const { props } = this;
    const { children, ...rest } = props;
    // console.log(rest);
    return (
      <Tooltip {...rest}>
        {children}
      </Tooltip>
    );
  }
}
