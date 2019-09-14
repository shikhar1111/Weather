import React from 'react';

const Weather = props =>(
    <div>
        {props.city && props.country && <p>Location: {props.city},{props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions: {props.description}</p>}
        {props.temp_min && <p>Temperature-minimum: {props.temp_min}</p>}
        {props.wind_speed && <p>Wind Speed: {props.wind_speed}</p>}
        {props.error && <p>Error: {props.error}</p>}
    </div>
)

export default Weather;