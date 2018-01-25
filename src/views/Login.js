import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};
/* eslint-disable no-console */

const stuff = fetch('/api-auth/login/').then((things) => {
  console.log(things);
});
console.log(stuff);


export default class Login extends React.Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <h2>Login</h2>
        <Link to="/login"><RaisedButton label="Login" primary /></Link>
      </Paper>
    );
  }
}
