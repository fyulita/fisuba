import React, { Component, Fragment } from 'react';

import { Header } from './Header';
import { Materias } from './Materias';


export class Home extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Header/>
                    <Materias/>
                </Fragment>
            </div>
        )
    }
}

export default Home;
