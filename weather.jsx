import React from 'React';
import allKeys from './keys';

class Weather extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (

      <div>{allKeys["weatherKey"]}</div>

    )
  }


}


export default Weather;

