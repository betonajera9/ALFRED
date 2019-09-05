import React, { Component }from 'react';
import { render } from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { Query, ApolloProvider} from 'react-apollo';

import Login from './pages/login.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class Alfred extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'user': '',
      'pass': ''
    };
  }

  handleLogin(evt) {
    const {id, value} = evt.target;
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

render(
  <ApolloProvider client={client}>
    <Alfred/>
  </ApolloProvider>,
  document.getElementById('Form'));
