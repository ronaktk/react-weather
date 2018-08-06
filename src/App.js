import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import AppContext from './components/AppContext';
import Weather from './components/Weather';

const API_KEY = "";

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      response: ''
    };
  }

  searchWeather() {
    if(this.state.name == '' || this.state.name == undefined) {
      let city = 'Newark';
      
      axios.get('https://api.apixu.com/v1/current.json?key=7f89ed68a18b4f73944142617180508&q=' + city)
      .then(response => {
        let arr = [];
        for(var key in response.data.location) {
          arr.push(response.data.location[key]);
        }

        let arr2 = [];
        for(var key2 in response.data.current) {
          arr.push(response.data.current[key2]);
        }

        let arr3 = [];
        for(var key3 in response.data.condition) {
          arr3.push(response.data.condition[key3]);
        }

        let concatArray = arr.concat(arr2);
        let finalConcat = concatArray.concat(arr3);

        this.setState({
          response: finalConcat
        })
      })
      .catch(err => {
        console.log(err);
      });
    }

    else {
      //we do the same here, but in this case
      //we pass the state.name which will be defined here
      console.log("HEllo" + this.state.name);
      axios.get("https://api.apixu.com/v1/current.json?key=56bf64d79e664a1f861184944183103&q=" + this.state.name)
      .then(response => {
      
        //get the location data
        let arr = [];
        for (var key in response.data.location) {
          arr.push(response.data.location[key]);
        }
        //get the current data
        let arr2 = [];
        for (var key2 in response.data.current) {
           arr2.push(response.data.current[key2]);
        } 
       
        //get the actual conditions
        let arr3 = [];
        for (var key3 in response.data.current.condition) {
          arr3.push(response.data.current.condition[key3]);
        }
  
        //create a variable to store the concat array
        let concatArray = arr.concat(arr2);
        //finally concat the third array
        let finalConcat = concatArray.concat(arr3); 
  
        this.setState({
         response: finalConcat
        })
      })
      .catch(err => {
        console.log(err);
      });
    }

  }

  componentDidMount = () => {
    this.searchWeather();
  }

  getLocation = (e) => {
    let value = e.target.value;
    this.setState({
      name: value
    });
  }

  search = (e) => {
    e.preventDefault();
    this.searchWeather();
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.getLocation} placeholder="Type your city name" />
          <input type="submit" onClick={this.search} value="Search" /> 
        </form>

        <AppContext.Provider value={this.state.response}> 
         
         <Weather /> 
        </AppContext.Provider> 

      </div>
    );
  }
}

export default App;
