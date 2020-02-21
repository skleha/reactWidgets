import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props) 
    this.state = { time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()})
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intevalId);
  }

  render() {
    
    const hours = this.state["time"].getHours();
    const minutes = this.state["time"].getMinutes();
    const seconds = this.state["time"].getSeconds();

    return (
      <div>
        <h4>Current time: {hours}:{minutes}:{seconds}</h4>
      </div>
    )
  
  }

}

export default Clock;