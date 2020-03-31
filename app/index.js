import React from 'react';
import ReactDOM from 'react-dom';
import css from './css/index.css';
import SwitchToggledOff from './svg/switch-toggled-off.svg';
import SwitchToggledOn from './svg/switch-toggled-on.svg';
import OfficeRoom from './svg/office-room.svg';
import LampIsOff from './svg/lamp-is-off.svg';
import LampIsOn from './svg/lamp-is-on.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightIsToggledOn: false
    };
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <>
        <OfficeRoom className="office-room" />
        <LampIsOff class="lamp-is-off" />
        <SwitchToggledOff
          className="switch-toggled-off"
          onClick={() => this.handleClick()}
        />
        <LampIsOn class="lamp-is-on" />
        <SwitchToggledOn className="switch-toggled-on" />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
