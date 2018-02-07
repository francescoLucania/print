import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Site_header from '../Site_header/Site_header';
import Site_footer from '../Site_footer/Site_footer';

import NextPin from '../../../img/next.svg';
import jetImage from '../../../img/h1.png';
import jetImage2 from '../../../img/h2.png';

const Home = (props) => {

    return (
        <div className="home">



            <div className="home__grid">

                <div className="home__col">
                    <article className="home__content">

                        <h2>Струйные МФУ</h2>

                        <p>Созданы на основе технологии InkBenefit, обеспечивающей<br/> быстродействие, экономичность и профессиональное качество печати</p>

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

                        <h2>Лазерные принтеры и МФУ</h2>

                        <p>Повышайте производительность и эффективность вашей работы, экономьте<br/> на стоимости печати, печатайте с лучшим качеством.</p>

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
    );
};

export default Home;