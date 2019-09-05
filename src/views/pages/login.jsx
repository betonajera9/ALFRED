import React, {Component} from 'react';

import { gql } from 'apollo-boost';
import { Query} from 'react-apollo';

const UsersQuery = (props) => {
  console.log('Entro');
  const {user, pass} = props;
  return (
    <Query
      query={gql`
        {
          getOneUser(id: user, password: pass){
            id
            username
            email
            password
          }
        }
      `}
    >
      {({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log(data);
        return data.getOneUser(user => (
          <p>Hello {user.username}<br/></p>
        ));
      }}
    </Query>
  );
};

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'user': '',
      'pass': ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    // this.addUserPass = this.addUserPass.bind(this);
  }

  addUserPass(evt) {
    evt.preventDefault();
    return (<h1>hola</h1>);
  }

  handleLogin(evt) {
    const {id, value} = evt.target;
    this.setState({
      [id]: value
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
        <UsersQuery user={this.state.user} pass={this.state.pass}/>
      </form>
    );
  }
}

export default Login;
