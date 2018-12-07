import React, { Component } from 'react';
import Dial from '../../audioControls/dial';

class SynthOne extends React.Component {

  render() {
    return (
      <div className="container">
        <Dial id={'dial_volume'} size={[60,60]} />
      </div>

    );
  }
}

export default SynthOne;
