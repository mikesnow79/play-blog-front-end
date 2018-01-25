import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Row, Col} from 'react-flexbox-grid';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './views/Login';
import TempHomeView from './views/TempHomeView';

/* eslint-disable no-console */

function component() {
  let element = document.createElement('div');
  let mainContainerId = 'main-container';
  element.setAttribute('id', mainContainerId);
  return element;
}

document.body.appendChild(component());

ReactDOM.render(<MuiThemeProvider>
  <Router>
    <Row around="xs">
      <Col xs={12} md={11}>
          <Route exact path="/index" component={Login} />
          <Route exact path="/login" component={TempHomeView} />
        {/*<Route exact path="/app" component={CartoonsDirectory} />*/}
      </Col>
    </Row>
  </Router>
</MuiThemeProvider>, document.getElementById('main-container'));
