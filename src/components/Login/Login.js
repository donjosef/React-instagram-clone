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

    loginHandler = () => {
      localStorage.setItem('username', this.state.user);
    }

    render() {
      return (
        <div className='LoginForm'>
            <h2>Instagram Clone</h2>
            <form onSubmit={this.loginHandler}>
              <input
                  value={this.state.user}
                  onChange={this.changeUserHandler}
                  placeholder='Username'/>
              <input
                  type='password'
                  value={this.state.password}
                  onChange={this.changePasswordHandler}
                  placeholder='Password'/>
              <button>Login</button>
            </form>
            <p>This is a fake login form.<br /> Enter a random username and password</p>
        </div>
      )
    }
}

export default Login;
