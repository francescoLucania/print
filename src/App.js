import React, { Component } from 'react';
import Site_header from './views/components/Site_header/Site_header';
import Site_footer from './views/components/Site_footer/Site_footer';
import Main from './views/components/Main/Main';

class App extends Component {
    render() {
        return (
            <div className="page">
                <Site_header/>
                <Main/>
                <Site_footer/>

            </div>
        )
    }
}

export default App
