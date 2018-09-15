import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    state = {
      user: '',
      password: ''
    }

    changeUserHandler = (e) => {
      this.setState({
        user: e.target.value
      })
    }

    changePasswordHandler = (e) => {
      this.setState({
        password: e.target.value
      })
    }
    render() {
      return (
        <form className='LoginForm'>
          <input value={this.state.user} onChange={this.changeUserHandler} placeholder='Username'/>
          <input value={this.state.password} onChange={this.changePasswordHandler} placeholder='Password'/>
          <button>Login</button>
        </form>
      )
    }
}

export default Login;
