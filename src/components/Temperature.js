import React, { Component } from 'react'
import { Consumer } from '../context'

class Temperature extends Component {
  render() {
    return(
      <Consumer>
        {value => {
          const { temperature, metric, description } = value
          return(
            <React.Fragment>
            <div className="temperature">
              <div className="degree-section">
                <h2 className="temperature-degree">{temperature}</h2>
                <span>{metric}</span>
              </div>
              <div className="description">{description}</div>      
            </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Temperature