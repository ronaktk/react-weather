import React, { Component } from 'react'
import Skycons from 'react-skycons'
import { Consumer } from '../context'

class Location extends Component {
  render() {
    return(
      <Consumer>
        {value => {
          const { location, icon } = value
          const iconStyle = {
            width: "200px",
            heigth: "100%",
            marginRight: "-50px"
          }
          return(
            <React.Fragment>
              <div className="location">
                <h1 className="location-timezone">{location}</h1>
                
                <Skycons 
                  color = "white"
                  icon = {icon}
                  autoplay = {true}
                  style = {iconStyle}
                />
                
              </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Location