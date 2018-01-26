import React from 'react';
import Paper from 'material-ui/Paper';
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router-dom';


const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};
/* eslint-disable no-console */

export default class Login extends React.Component {

  isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }

  handleLoginSuccess = () => {
    // TODO: figure out why this.setState doesnt force the re-render
    this.forceUpdate();
  }

  render() {
    let isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <Paper style={styles.paper}>
        { isAlreadyAuthenticated ? <Redirect to={{pathname: '/home'}}/> : (
          <div>
            <h2>Login</h2>
            <LoginForm onSuccessfullLogin={this.handleLoginSuccess}/>
          </div>
        )}
      </Paper>
    );
  }
}
