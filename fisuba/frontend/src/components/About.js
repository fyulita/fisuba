import React, { Component, Fragment } from 'react';

import { Header } from './Header';


export class About extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h1>¿Qué es FisUBA?</h1>
                    <br/>
                    <p>
                        FisUBA es una página web donde estudiante de la Lic. en Ciencias Físicas de la Universidad de Buenos Aires
                        pueden subir contenido relacionado a la cursada, principalmente apuntes y ejercicios resueltos de las guías
                        y los parciales.
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default About;
