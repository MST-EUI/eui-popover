import React, { Component } from 'react';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Button from '@mistong/eui-button';
import Popover from '../src/index';

import './demo.scss';

class HoverDemo extends Component {
  render() {
    const overlay = (
      <div>
          这是个自定义的tooltip overlay!
      </div>
    );
    return (
      <div style={{ marginLeft: 250, marginTop: 50 }}>
        <div style={{ marginLeft: 78 }}>
          <Popover placement="topLeft" title="上左" overlay={overlay}>
            <Button type="primary">上左</Button>
          </Popover>
          <Popover placement="top" title="上边" overlay={overlay}>
            <Button type="primary" style={{ marginLeft: 10 }}>上边</Button>
          </Popover>
          <Popover placement="topRight" title="上右" overlay={overlay}>
            <Button type="primary" style={{ marginLeft: 10 }}>上右</Button>
          </Popover>
        </div>
        <div style={{ width: 78, float: 'left' }}>
          <Popover trigger="click" placement="leftTop" title="左上" overlay={overlay}>
            <Button type="primary">左上</Button>
          </Popover>
          <Popover placement="left" title="左边" overlay={overlay}>
            <Button type="primary" style={{ marginTop: 5 }}>左边</Button>
          </Popover>
          <Popover placement="leftBottom" title="左下" overlay={overlay}>
            <Button type="primary" style={{ marginTop: 5 }}>左下</Button>
          </Popover>
        </div>
        <div style={{ width: 78, marginLeft: 310 }}>
          <Popover placement="rightTop" title="右上" overlay={overlay}>
            <Button type="primary" >右上</Button>
          </Popover>
          <Popover placement="right" title="右边" overlay={overlay}>
            <Button type="primary" style={{ marginTop: 5 }}>右边</Button>
          </Popover>
          <Popover placement="rightBottom" title="右下" overlay={overlay}>
            <Button type="primary" style={{ marginTop: 5 }}>右下</Button>
          </Popover>
        </div>
        <div style={{ marginLeft: 78, clear: 'both' }}>
          <Popover placement="bottomLeft" title="下左" overlay={overlay}>
            <Button type="primary">下左</Button>
          </Popover>
          <Popover placement="bottom" title="下边" overlay={overlay}>
            <Button type="primary" style={{ marginLeft: 10 }}>下边</Button>
          </Popover>
          <Popover placement="bottomRight" title="下右" overlay={overlay}>
            <Button type="primary" style={{ marginLeft: 10 }}>下右</Button>
          </Popover>
        </div>
      </div>
    );
  }
}

class ClickDemo extends Component {
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Popover
          trigger="click"
          title="这是Popover的title"
          content="这是Popover的content这是Popover的content这是Popover的content这是Popover的content"
        >
          <Button type="primary">点击弹出</Button>
        </Popover>
      </div>
    );
  }
}

ReactDOM.render(
  <div className="demo">
    <h1>悬浮弹出</h1>
    <HoverDemo />
    <h1 style={{ marginTop: 50 }}>点击弹出</h1>
    <ClickDemo />
  </div>,
  document.getElementById('app'),
);
