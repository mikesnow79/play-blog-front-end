import React from 'react';
import Paper from 'material-ui/Paper';
import LoginForm from '../components/LoginForm';


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
    console.log('In handleLoginSuccess');
  }

  render() {
    // const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <Paper style={styles.paper}>
        <h2>Login</h2>
        <LoginForm onSuccessfullLogin={this.handleLoginSuccess} />
      </Paper>
    );
  }
}
