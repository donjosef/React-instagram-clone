import React, { Component } from 'react';
import Login from '../../components/Login/Login'

const authentication = WrappedComponent => {
    return class extends Component {
      state = {
        loggedIn: false
      }

      componentDidMount() {
        if(localStorage.getItem('username')) {
          this.setState({
            loggedIn: true
          })
        } else {
          this.setState({
            loggedIn: false
          })
        }
      }
      render() {
        if(!this.state.loggedIn) {
          return <Login />
        } else {
          return <WrappedComponent />
        }
      }
    }
}

export default authentication;
