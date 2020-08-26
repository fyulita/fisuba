import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Materia from './Materia';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route path='/materia/:id' component={Materia} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
