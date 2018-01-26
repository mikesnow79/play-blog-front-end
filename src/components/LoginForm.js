import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from "axios/index";

const axiosConfig = {
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
};

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    console.log(this.props);
  }

  handleSubmit = (vent) => {
    vent.preventDefault();
    const server = axios.create(axiosConfig);
    const postData = {
        username: this.state.username,
        password: this.state.password
    };
    const emitLoginSuccess = this.props.onSuccessfullLogin;
    server.post('api-token-auth/', postData)
      .then((response) => {
        const serverToken = response.data.token;
        localStorage.setItem('token', serverToken);
        emitLoginSuccess();
      })
      .catch((err) => {
        console.log(err);
      });

  }

  handleUsernameChanged = (vent) => {
    this.setState({username: vent.target.value});
  }

  handlePasswordChanged = (vent) => {
    this.setState({password: vent.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField floatingLabelText="Username"
                   onChange={this.handleUsernameChanged}
                   value={this.state.username}/>
        <TextField floatingLabelText="Password"
                   onChange={this.handlePasswordChanged}
                   value={this.state.password}
                   type="password"/>
        <RaisedButton
          type="submit"
          label="Login"
          primary/>
      </form>
    );
  }
}
