import React, { Component } from 'react';

import Main from './views/components/Main/Main';
import Site_footer from './views/components/Site_footer/Site_footer';

class App extends Component {
    render() {
        return (
            <div className="page">
                <Main/>
                <Site_footer/>
            </div>
        )
    }
}


export default App
