import React from 'react';

const Weather = props =>(
    <div className="weather_info">
        {props.city && props.country && <p className="weather_details">Location: {props.city},{props.country}</p>}
        {props.temperature && <p className="weather_details">Temperature: {props.temperature}</p>}
        {props.humidity && <p className="weather_details">Humidity: {props.humidity}</p>}
        {props.description && <p className="weather_details">Conditions: {props.description}</p>}
        {props.temp_min && <p className="weather_details">Temperature-minimum: {props.temp_min}</p>}
        {props.wind_speed && <p className="weather_details">Wind Speed: {props.wind_speed}</p>}
        {props.error && <p className="weather_error">Error: {props.error}</p>}
    </div>
)

export default Weather;