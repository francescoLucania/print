import React, { Component } from 'react';
import PropTypes from 'prop-types'

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

        if (bodyScrollTop > 118) {
            this.state = { isFixed: true };
        } else {
            this.state = { isFixed: false };
        }

        console.log(this.state.isFixed);
        return false
    }

    render() {

        return (
            <header className={this.state.isFixed ? "site-header is-fixed" : "site-header"}>
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