import React, { Component } from 'react';

import AppContext from '../components/AppContext';

class Weather extends Component {
    render() {
        return(
            <AppContext.Consumer>
                {weatherData => (                
                    <div className="Weather">
                        <p className="location">{weatherData[0]}, {weatherData[1]} | {weatherData[2]}</p>
                        <p className="time">{weatherData[7]}</p>
                        <div className="conditions">
                            <img src={weatherData[29]} />
                            <p>{weatherData[28]}</p>
                            <p>{weatherData[10]} &deg;C</p>
                            <p>{weatherData[11]} &deg;F</p>
                        </div>
                    </div>
                    )
                }
            </AppContext.Consumer>
        );
    }
}

export default Weather;