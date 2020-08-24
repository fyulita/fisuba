import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
