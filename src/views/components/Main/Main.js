import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../Home/Home';
import Content from '../Content/Content';
import ContentJet from '../ContentJet/ContentJet';

const Main = () => (
    <div className="main">
        <Switch>
            <Route exact path='/home' component={Home}/>
            <Route path='/laser' component={Content}/>
            <Route path='/jet' component={ContentJet}/>
            <Redirect from="/" exact to="/home" />
        </Switch>
    </div>
);

export default Main;