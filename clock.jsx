import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props) 
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()})
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  addZeroIfNeeded(number) {
    let str = number.toString();
    if (str.length === 1) {
      return '0' + str;
    } else {
      return str;
    }
  }

  render() {
    
    const hours = this.addZeroIfNeeded(this.state["time"].getHours());
    const minutes = this.addZeroIfNeeded(this.state["time"].getMinutes());
    const seconds = this.addZeroIfNeeded(this.state["time"].getSeconds());

    return (
      <div className="clock">
        <div>Current time:</div>
        <div>{hours}:{minutes}:{seconds}</div>
      </div>
    )
  
  }

}

export default Clock;