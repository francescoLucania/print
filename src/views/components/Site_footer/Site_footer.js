import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NextPin from '../../../img/next.svg';
import MailPin from '../../../img/mail.svg';

class Site_footer extends Component {

    render() {
        return (

            <footer className="site-footer" id="site-footer">
                <div className="site-footer__contact">
                    <div className="container">
                        <div className="site-footer__contact-grid">
                            <p>©2018 Brother.<br/> Копирование материалов<br/>сайта запрещено.</p>
                            <a href="mailto:info@brother.ru" className="site-footer__mail-link"><img src={MailPin} alt="info@brother.ru"/>info@brother.ru</a>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Site_footer;