import React, { Component }from 'react';
import { render } from 'react-dom';

class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'user': '',
      'pass': ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.addUsrPass = this.addUsrPass.bind(this);
  }

  addUsrPass(evt) {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
    console.log(this.state);

  }

  handleLogin(evt) {
    const {id, value} = evt.target;
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.addUsrPass}>
        <label>User Name </label>
        <input onChange={this.handleLogin} id='user'/>
        <br/>
        <label>Password </label>
        <input onChange={this.handleLogin} id='pass' type='password' />
        <br/>
        <button >hOla</button>
      </form>
    );
  }
}

render(<Form/>, document.getElementById('Form'));
