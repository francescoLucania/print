import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import MailPin from '../../../img/mail.svg';
import backPin from '../../../img/reply.png';

class Site_footer extends Component {

    render() {
        return (

            <footer className="site-footer" id="site-footer">
                <div className="site-footer__contact">
                    <div className="container">
                        <div className="site-footer__contact-grid">
                            <p>©2018 Brother.<br/> Копирование материалов<br/> сайта запрещено.</p>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Site_footer;