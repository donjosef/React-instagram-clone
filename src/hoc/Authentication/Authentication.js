import React, { Component } from 'react';

const authentication = WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default authentication;
