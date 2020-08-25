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
                        FisUBA es una página web donde estudiantes de la Lic. en Ciencias Físicas de la Universidad de Buenos Aires
                        pueden subir contenido relacionado a la cursada, principalmente apuntes y ejercicios resueltos de las guías
                        y los parciales.

                        Esta página todavía está en construcción y la idea es que sea open-source para que la propia comunidad pueda
                        decidir que features debe tener la página. Pueden visitar el repositorio de Github para ver el avance del
                        proyecto y el board de Trello para ver la trayectoria y los futuros features de la página.
                    </p>
                    <br/>
                    <ul>
                        <li>Repositorio de Github: <a href="https://github.com/fyulita/fisuba">https://github.com/fyulita/fisuba</a></li>
                        <li>Board de Trello: <a href="https://trello.com/b/bifiKAUS/fisuba">https://trello.com/b/bifiKAUS/fisuba</a></li>
                    </ul>

                    <br/>
                    
                    <h2>Info para colaboradores</h2>
                    <br/>
                    <p>
                        FisUBA usa Django REST Framework en el backend y React.js en el frontend. Django REST Framework permite crear
                        una API para poder hacer requests a la base de datos de manera sencilla. React.js permite hacer páginas dinámicas
                        de manera fácil que nos va a permitir hacer que el usuario  pueda interactuar con la página fácilmente y nos
                        ahorra tiempo y código. Además, para el diseño de la página usamos Bootstrap ya que es bastante práctico para
                        no gastar mucho tiempo en el diseño y porque permite hacer páginas que se adapten a pantallas de distintos tamaños.
                        En el repositorio de Github hay información sobre cómo pueden experimentar con la página.
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default About;
