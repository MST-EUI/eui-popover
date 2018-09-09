import React from 'react';
import Tooltip from 'rc-tooltip';

import './style/index.scss';

const { PropTypes } = React;

export default class Popover extends React.Component {
  static displayName = 'Popover';
  static propTypes = {
    prefixCls: PropTypes.string,
    arrowContent: PropTypes.any,
  };

  static defaultProps = {
    prefixCls: 'eui-popover',
    arrowContent: <div className="eui-popover-arrow-inner" />,
  };

  overlayRender() {
    const me = this;
    const { prefixCls, title, content } = me.props;
    return (
      <div className={`${prefixCls}-wrapper`}>
        { title && <div className={`${prefixCls}-title`}>{ title }</div>}
        <div className={`${prefixCls}-content`}>
          {content}
        </div>
      </div>
    );
  }

  render() {
    const { props } = this;
    const { children, overlay, ...rest } = props;
    return (
      <Tooltip
        overlay={overlay || this.overlayRender()}
        {...rest}
      >
        {children}
      </Tooltip>
    );
  }
}
