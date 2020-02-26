import React from 'React';
import { allKeys } from './keys';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: null };
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=5391997&appid=${allKeys.weatherKey}`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({ apiResponse: result })
      })
  }

  render() {
    
    if (!this.state.apiResponse) return null;
    
    const desc = this.state.apiResponse["weather"][0]["main"];
    const kelvin = this.state.apiResponse["main"]["temp"];
    const fahrenheit = ((kelvin - 273.15) * (9 / 5) + 32).toFixed(1);
    const wind = (this.state.apiResponse["wind"]["speed"] * 2.23694).toFixed(1);
    
    return (

      <div className="weather-main">
        <div className="weather-title">Current Weather</div>
        <div className="grid-container">
          <div className="grid-item">Condition</div>
          <div className="grid-item">{desc}</div>
          <div className="grid-item">Temperature</div>
          <div className="grid-item">{fahrenheit}F</div>
          <div className="grid-item">Windspeed</div>
          <div className="grid-item">{wind} mph</div>
        </div>
      </div>

    )
  }


}

export default Weather;

