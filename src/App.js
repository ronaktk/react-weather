import React, { Component } from 'react'
import Index from './components/Index'
import { Provider } from './context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index}/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
