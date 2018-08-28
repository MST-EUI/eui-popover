import React from 'react';
import ReactDOM from 'react-dom';
import Popover from '../src/index';

import './demo.scss';

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Popover style={{ width: '200px' }} />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
