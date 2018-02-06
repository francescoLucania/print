import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import Logo from '../../../img/logo.svg';
import MapPin from '../../../img/pin.svg';

const siteName = 'brother';
class Site_header extends Component {

    constructor(props) {
        super(props);
        this.state = { isFixed: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {

        var bodyScrollTop = document.documentElement.scrollTop;

        if (bodyScrollTop > 70) {
            this.state = { isFixed: true };

            document.getElementById('site-header').classList.add('is-fixed');

        } else {
            this.state = { isFixed: false };

            document.getElementById('site-header').classList.remove('is-fixed');
        }

        return false;
    }

    render() {

        return (
            <header className={this.state.isFixed ? "site-header is-fixed" : "site-header"} id="site-header">
                <div className="container">
                    <div className="site-header__grid">
                        <Link to="/home" className="site-header__logo-box">
                            <img src={Logo} alt={siteName}/>
                        </Link>
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