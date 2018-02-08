import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import Logo from '../../../img/logo.svg';
import MapPin from '../../../img/pin.svg';
import backPin from '../../../img/reply.png';

const siteName = 'brother';
class Site_header extends Component {

    constructor(props) {
        super(props);
        this.state = { isFixed: false };
        this.state = { isOpenPopup: false };
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }

    goBack(){
        this.props.history.goBack();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    popupState() {
        this.setState({ isOpenPopup: !this.state.isOpenPopup });

        console.log(document.getElementsByClassName('content-grid').length);

        if (this.state.isOpenPopup) {

            document.getElementById('body').classList.remove('is-hidden');
            document.getElementById('site-header').classList.remove('is-hidden');

        } else {
            document.getElementById('site-header').classList.add('is-hidden');
            document.getElementById('body').classList.add('is-hidden');
        }

        return false
    }

    handleScroll(event) {

        var bodyScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

        document.getElementById('site-header').classList.add('is-fixed');



        if (bodyScrollTop > 70) {
            document.getElementById('site-header').classList.add('is-fixed');
            this.state = { isFixed: true };

        } else {
            document.getElementById('site-header').classList.remove('is-fixed');
            this.state = { isFixed: false };
        }

        return false;
    }

    render() {

        const headerClassName = this.state.isFixed ? "site-header is-fixed" : "site-header";

        return (
            <header className={headerClassName} id="site-header">
                <div className="container">
                    <div className="site-header__grid">
                        <Link to="/home" className="site-header__logo-box">
                            <img src={Logo} alt={siteName}/>
                        </Link>
                        <div className="site-header__button-box">
                            <Link to="/home" id="back" className="button button--transparent button--back switch-popup-button not-animate">
                                <img src={backPin} alt=""/>
                                <span>Главная</span>
                            </Link>
                            <button href="#" className={this.state.isOpenPopup ? 'button button--transparent button--map switch-popup-button is-active' : 'button button--transparent button--map'} onClick={this.popupState.bind(this)}>
                                <img src={MapPin} alt=""/>
                                <span>Где купить?</span>
                            </button>
                            <div className="information-popup-fade" onClick={this.popupState.bind(this)}></div>
                            <div className="information-popup" >
                                <div className="information-popup__body">
                                    <h2>Где купить?</h2>
                                    <p>Подберите подходящего вам реселлера на официальном сайте Brother. Выберите наиболее удобный способ приобретения техники Brother. Найдите ближайшего к Вам реселлера, введя свой адрес на официальном сайте Brother.</p>
                                    <div className="information-popup__button-box">
                                        <a href="https://www.brother.ru/dealer-locator" className="button" target="_blank">Посетить сайт</a>
                                    </div>
                                    <button href="#" className="information-popup__close"  onClick={this.popupState.bind(this)}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Site_header;