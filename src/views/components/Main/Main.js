import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Redirect,Link} from 'react-router-dom';
import Home from '../Home/Home';
import Content from '../Content/Content';
import ContentJet from '../ContentJet/ContentJet';

import Site_header from '../Site_header/Site_header';
import Site_footer from '../Site_footer/Site_footer';

const Main = () => (
    <div className="main">
        <Site_header/>
        <Switch>
            <Route exact path='/home' component={Home}/>
            <Route path='/laser' component={Content}/>
            <Route path='/jet' component={ContentJet}/>
            <Redirect from="/" exact to="/home" />
        </Switch>
        <Site_footer/>
        <Link id="back-mobile" className="mobile-back" to="/home">
            {/*<img src={backPin} alt=""/>*/}
            <span>на главнаю</span>
        </Link>
    </div>
);

export default Main;