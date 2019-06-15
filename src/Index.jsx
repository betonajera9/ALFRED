import React, { Component }from 'react';
import { render } from 'react-dom';

class Form extends Component{
  render(){
    return(
      <table id= "FormTable">
        <tr>
          <td>
            <label for= "uName">User Name </label>
            <input id= "uName"/>
          </td>
        </tr>
        <tr>
          <td>
            <label for= "pass">Password </label>
            <input id= "pass" type= "password"/>
          </td>
        </tr>
        <tr>
          <td>
            <input type= "Button" value= "Inicias sesión"/>
          </td>
        </tr>
      </table>
    )
  }
}

render(<Form />, document.getElementById('Form'));
