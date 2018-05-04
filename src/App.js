import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppWrapper from './components/AppWrapper';
import WYRicon from './images/WYR-icon.png';
import logo from './logo.svg';
import './App.css';
import DisplayHeader from './components/DisplayHeader';
import HomePage from './containers/HomePage';


class App extends Component {


  render() {
    return (
      <AppWrapper>
        <Helmet 
          titleTemplate="%s - Would You Rather?"
          defaultTitle="Would you Rather?">
          <link rel="WYR-icon" href= { WYRicon } />
        </Helmet>
        <DisplayHeader /> 
        <Switch>
          <Route path="/" component={ HomePage } />
        </Switch>
    </AppWrapper>
    );
  }
}

export default App;
