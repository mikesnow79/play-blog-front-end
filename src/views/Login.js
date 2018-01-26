import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
// import {Link} from 'react-router-dom';

const axiosConfig = {
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
};

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};
/* eslint-disable no-console */

export default class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit = (vent) => {
    vent.preventDefault();
    const server = axios.create(axiosConfig);
    server.post('api-token-auth/',
      {
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        const serverToken = response.data.token;
        console.log(serverToken);
        localStorage.setItem('token', serverToken);
      })
      .catch((err) => {
        if(err.response.status === 400) {
          console.log('TODO: ADd some handling of 400s for front?')
        }
      });
  }

  handleUsernameChanged = (vent) => {
    this.setState({username: vent.target.value})
  }

  handlePasswordChanged = (vent) => {
    this.setState({password: vent.target.value})
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField floatingLabelText="Username"
                     onChange={this.handleUsernameChanged}
                     value={this.state.username}/>
          <TextField floatingLabelText="Password"
                     onChange={this.handlePasswordChanged}
                     value={this.state.password} />
                     {/*value={this.state.password} type="password"/>*/}
          <RaisedButton
            type="submit"
            label="Login"
            primary />
        </form>
      </Paper>
    );
  }
}
