import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Logo from '../../../img/logo.svg';
import MapPin from '../../../img/pin.svg';

const siteName = 'brother';

class Site_header extends Component {

    render() {

        return (
            <header className="site-header">
                <div className="container">
                    <div className="site-header__grid">
                        <a href="index.html" className="site-header__logo-box">
                            <img src={Logo} alt={siteName}/>
                        </a>
                        <div className="site-header__button-box">
                            <a href="#" className="button button--transparent button--map">
                                <img src={MapPin} alt=""/>
                                <span>Где купить?</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Site_header;