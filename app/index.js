import React from 'react';
import ReactDOM from 'react-dom';
import css from './css/index.css';
import SwitchToggledOff from './svg/switch-toggled-off.svg';
import SwitchToggledOn from './svg/switch-toggled-on.svg';
import OfficeRoom from './svg/office-room.svg';
import LampIsOff from './svg/lamp-is-off.svg';
import LampIsOn from './svg/lamp-is-on.svg';

function LampToggle(props) {
  if (!props.lamp) {
    return <LampIsOn className="lamp-is-on" />;
  } else {
    return <LampIsOff className="lamp-is-off" />;
  }
}

function SwitchToggle(props) {
  if (!props.switch) {
    return <SwitchToggledOn className="switch-toggled-on" />;
  } else {
    return <SwitchToggledOff className="switch-toggled-off" />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIsOn: false
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showToggle: !state.showToggle
    }));
  }

  render() {
    return (
      <div>
        <OfficeRoom className="office-room" />
        <LampToggle lamp={this.state.showToggle} />
        <SwitchToggle switch={this.state.showToggle} />
        <button onClick={this.handleToggleClick}>
          {this.state.showToggle ? 'Toggle Lamp On' : 'Toggle Lamp Off'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
