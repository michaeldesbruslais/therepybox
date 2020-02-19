import React, {Component} from 'react';
import clouds from '../Assets-and-Screens/Assets/Clouds_icon.png'
import rain from '../Assets-and-Screens/Assets/Rain_icon.png'
import sun from '../Assets-and-Screens/Assets/Sun_icon.png'

class Weather extends Component {

  constructor(props) {
    super(props)
    this.appid = 'd0a10211ea3d36b0a6423a104782130e'
    this.weather = {
      clouds: clouds,
      rain: rain,
      sun: sun
    }
    this.state = {
      icon: '',
      temp: '',
      location: ''
    }
  }

  render(){
    let {icon,temp,location} = this.state
    return (
      <div>
        <div>
          <div className="weather-icon" style={{backgroundImage:`url(${icon})`}}></div>
          <div className='weather-temp'>{temp}<br/>degrees</div>
        </div>
        <div className='weather-location'>{location}</div>
      </div>
    )
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let {latitude, longitude} = position.coords
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.appid}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          temp: Math.round(res.main.temp -273.15),//Kelvin to celsius, rounded
          location: res.name,
          icon: this.weather[res.weather[0].main.toLowerCase()]
        })
      })
      .catch(e => console.log(e))
    })
  }
}

export default Weather