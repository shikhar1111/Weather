import React from 'react';  
import Titles from './components/title'; 
import Forms from './components/form';
import Weather from './components/weather';

const API_KEY = "ce48c48752b4a98bb4f7ce86b749954d";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    temp_min: undefined,
    wind_speed: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        temp_min: data.main.temp_min,
        wind_speed: data.wind.speed,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        temp_min: undefined,
        wind_speed: undefined,
        error: "Please Enter Values"
      });
    }
  }
  render(){
    return(
      <div>
        <Titles />
        <Forms getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature} 
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          temp_min={this.state.temp_min}
          wind_speed={this.state.wind_speed}
          error={this.state.error}/>
      </div>
    );
  }
}

export default App;
