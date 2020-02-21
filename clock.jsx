import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props) 
    this.state = new Date();

  }

  render() {
    
    const time = this.state.toString();


    return (
      <div>
        <h3>Current time:</h3>
        <h4>{time}</h4>

      </div>
    )
  
  }

}

export default Clock;