import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NextPin from '../../../img/next.svg';

class Site_footer extends Component {

    render() {
        return (

            <footer className="site-footer" id="site-footer">
                <div className="site-footer__promo">
                    <div className="container">
                        <div className="site-footer__navigate">
                            <a href="#" className="site-footer__next-link">
                                <span>
                                    Перейти на раздел <b>Струйных<span>&nbsp;</span>принтеров</b>
                                </span>
                            </a>

                            <a href="#" className="button button--transparent button--next button--transparent-alternative">
                                <img src={NextPin} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Site_footer;