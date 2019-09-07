import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Route, Redirect } from 'react-router-dom';

import { errorLogin } from '../pages/login.jsx';

const UsersQuery = (props)=> {
  return (
    <Query
      query={gql`
        query ($user: String!, $pass: String!) {
          loginUser(username: $user, password: $pass) {
            id
            username
            password
            email
          }
        }
      `} variables= {props}
    >
      {({ load, err, data }) => {
        if (load) return <p>Loading...</p>;
        if (err) {
          return <p>Error :(</p>;
        }
        if (data.loginUser == null) {
          return (
            <p>Contraseña o usuario incorrectos</p>
          );
        } else {
          const pathname = `/${data.loginUser.id}`;
          return (
            <Redirect to= {{
              pathname,
            }}/>
          );
        }

      }
    }
    </Query>
  );
};

export default UsersQuery;
