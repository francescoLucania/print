import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Site_header from '../Site_header/Site_header';
import Site_footer from '../Site_footer/Site_footer';

import NextPin from '../../../img/next.svg';
import jetImage from '../../../img/h1.png';
import jetImage2 from '../../../img/h2.png';

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        document.getElementById('back').classList.add('is-hidden');
        document.getElementById('back-mobile').classList.add('is-hidden');
        document.getElementById('site-footer').classList.remove('is-bottom-gutter');
    }

    render() {

        return (

        <div className="home">

            <div className="home__grid">

                <div className="home__col">
                    <article className="home__content">

                        <h2>Цветные струйные устройства</h2>

                        <p>МФУ корпоративного класса с поддержкой формата А3</p>

                        <div className="home__button-box">
                            <Link to="/jet" className="button button--read-more">
                                <span>подробнее</span>
                                <img src={NextPin} alt=""/>
                            </Link>
                        </div>

                        <div className="home__image">
                            <img src={jetImage} alt=""/>
                        </div>

                    </article>

                </div>

                <div className="home__col">

                    <article className="home__content">

                        <h2>Цветные лазерные устройства</h2>

                        <p>Принтеры и МФУ для офисов с высокими объемами печати</p>

                        <div className="home__button-box">
                            <Link to="/laser" className="button button--read-more">
                                <span>подробнее</span>
                                <img src={NextPin} alt=""/>
                            </Link>
                        </div>

                        <div className="home__image">
                            <img src={jetImage2} alt=""/>
                        </div>
                    </article>

                </div>

            </div>


        </div>
    )}
};

export default Home;