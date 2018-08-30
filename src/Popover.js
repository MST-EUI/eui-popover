// import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
// import i18n from './i18n';

import './style/index.scss';

const { PropTypes } = React;

export default class Popover extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    arrowContent: PropTypes.any,
  };

  static defaultProps = {
    prefixCls: 'eui-popover',
    arrowContent: <div className="eui-popover-arrow-inner" />,
  };

  render() {
    const { props } = this;
    const { children, ...rest } = props;
    return (
      <Tooltip {...rest}>
        {children}
      </Tooltip>
    );
  }
}
