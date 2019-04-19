import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {

  state = {
    location: '',
    lat: '',
    long: '',
    temperature: '',
    metric: '',
    description: '',
    icon: ''
  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })

        const proxy = "https://cors-anywhere.herokuapp.com/"

        axios.get(`${proxy}https://api.darksky.net/forecast/${process.env.REACT_APP_DS_KEY}/${this.state.lat},${this.state.long}`)
        .then(res => {
          console.log(res.data)
          this.setState({
            temperature: res.data.currently.temperature,
            metric: 'F',
            description: res.data.currently.summary,
            icon: res.data.currently.icon.replace(/-/g,"_").toUpperCase()
          }, () => this.getGeoCode())
        })
        .catch(err => console.log(err))
      })
    }
  }

  getGeoCode() {
    axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${this.state.lat}%2C${this.state.long}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=${process.env.REACT_APP_HERE_ID}&app_code=${process.env.REACT_APP_HERE_CODE}`)
    .then(res => {
      this.setState({
        location: res.data.Response.View[0].Result[0].Location.Address.City + ', ' + res.data.Response.View[0].Result[0].Location.Address.State
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer