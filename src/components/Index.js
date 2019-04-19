import React from 'react'
import Location from './Location'
import Temperature from './Temperature'
import Spinner from './Spinner'
import { Consumer } from '../context'

const Index = () => {
  return(
    <Consumer>
        {value => {
          const { location, temperature, metric, description, icon } = value
          if(location === "" || temperature === "" || metric === "" || description === "" || icon === "") {
            return(
              <Spinner />
            )
          } else {
            return(
              <React.Fragment>
                <Location />
                <Temperature />
              </React.Fragment>
            )
          }
        }
      }
    </Consumer>
  )
}

export default Index