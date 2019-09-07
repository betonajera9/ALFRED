import React, { Component } from 'react';

import UsersQuery from '../req/user-pass.jsx';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      login: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.addUserPass = this.addUserPass.bind(this);
  }

  addUserPass(evt) {
    this.setState({
      login: true,
    });
    evt.preventDefault();
  }

  errorLogin() {
    this.setState({
      login: false,
    });
  }

  handleLogin(evt) {
    const { id, value } = evt.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.addUserPass}>
        <label>User Name </label>
        <input onChange={this.handleLogin} id='user'/>
        <br/>
        <label>Password </label>
        <input onChange={this.handleLogin} value={this.state.pass} id='pass' type='password' />
        <br/>
        <button>Log in</button>
        {this.state.login ?
        <UsersQuery user={this.state.user} pass={this.state.pass}/> :
        null }
      </form>
    );
  }
}

export default Login;
