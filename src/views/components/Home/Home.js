import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Site_header from '../Site_header/Site_header';
import Site_footer from '../Site_footer/Site_footer';

const Home = (props) => {

    return (
        <div className="home">

            <Site_header/>

            <div className="home__grid">

                <div className="home__col">

                </div>

                <div className="home__col">

                </div>

            </div>

            <Site_footer/>
        </div>
    );
};

export default Home;