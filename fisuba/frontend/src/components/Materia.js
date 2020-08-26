import React, { Component, Fragment } from 'react';
import { Header } from './Header';


export class Materia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materia: {},
            guias: [],
            examenes: []
        }
        this.getCookie = this.getCookie.bind(this);
        this.fethMateria = this.fetchMateria.bind(this);
        this.fetchGuias = this.fetchGuias.bind(this);
        this.fetchExamenes = this.fetchExamenes.bind(this);
        this.sortGuias = this.sortGuias.bind(this);
        this.sortExamenes = this.sortExamenes.bind(this);
    }


    // https://docs.djangoproject.com/en/3.1/ref/csrf/
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie != '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }

        return cookieValue;
    }


    fetchMateria() {
        fetch(`/api/materias/${this.props.match.params.id}`, {
            method: 'GET',
            headers: {
                'X_CSRFToken': this.getCookie('csrftoken'),
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            materia: data
        }))
        .catch(err => console.log(err))
    }


    fetchGuias() {
        fetch('/api/guias', {
            method: 'GET',
            headers: {
                'X_CSRFToken': this.getCookie('csrftoken'),
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            guias: data
        }))
        .catch(err => console.log(err))
    }


    fetchExamenes() {
        fetch('/api/examenes', {
            method: 'GET',
            headers: {
                'X_CSRFToken': this.getCookie('csrftoken'),
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            examenes: data
        }))
        .catch(err => console.log(err))
    }


    // Ordeno primero por año (desc), luego por cuatrimestre (desc) y finalmente por número de guía.
    sortGuias(guias) {
        guias.sort((guia1, guia2) => {
            if (guia1.anio > guia2.anio) {
                return -1;
            } else if (guia1.anio === guia2.anio) {
                if (guia1.cuatrimestre > guia2.cuatrimestre) {
                    return -1;
                } else if (guia1.cuatrimestre === guia2.cuatrimestre) {
                    if (guia1.numero < guia2.numero) {
                        return -1;
                    } else {
                        return 1;
                    }
                } else {
                    return 1;
                }
            } else {
                return 1;
            }
        })

        return guias;
    }


    // Ordeno primero por año (desc), luego por cuatrimestre (desc) y finalmente por tipo (P1->P2->R1->R2->F->O)
    sortExamenes(examenes) {
        examenes.sort((examen1, examen2) => {
            if (examen1.anio > examen2.anio) {
                return -1;
            } else if (examen1.anio === examen2.anio) {
                if (examen1.cuatrimestre > examen2.cuatrimestre) {
                    return -1;
                } else if (examen1.cuatrimestre === examen2.cuatrimestre) {
                    // Voy a asignarles rangos dependiendo de sus valores y los ordeno en base al rango.
                    function getRank(tipo) {
                        switch (tipo) {
                            case 'P1':
                                return 1;
                            case 'P2':
                                return 2;
                            case 'R1':
                                return 3;
                            case 'R2':
                                return 4;
                            case 'F':
                                return 5;
                            case 'O':
                                return 6;
                        }
                    }

                    const rank1 = getRank(examen1.tipo);
                    const rank2 = getRank(examen2.tipo);
                    
                    if (rank1 < rank2) {
                        return -1;
                    } else {
                        return 1;
                    }

                } else {
                    return 1;
                }
            } else {
                return 1;
            }
        })

        return examenes;
    }


    UNSAFE_componentWillMount() {
        this.fetchMateria();
        this.fetchGuias();
        this.fetchExamenes();
    }

    
    render() {
        const materia = this.state.materia;
        const guias = this.sortGuias(this.state.guias);
        const examenes = this.sortExamenes(this.state.examenes);

        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <h1>{materia.nombre}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h1>Guías</h1>
                            <br/>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">Guía</th>
                                    <th scope="col">Año</th>
                                    <th scope="col">Cuatrimestre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {guias.map(guia => {
                                        if (guia.materia === materia.id) {
                                            return (
                                                <tr key={guia.id}>
                                                    <td>Guía {guia.numero}: {guia.nombre}</td>
                                                    <td>{guia.anio}</td>
                                                    <td>{guia.cuatrimestre === 1 ? 'Primer Cuatrimestre' :
                                                    guia.cuatrimestre === 2 ? 'Segundo Cuatrimestre' : 'Verano'}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-6">
                            <h1>Exámenes</h1>
                            <br/>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">Examen</th>
                                    <th scope="col">Año</th>
                                    <th scope="col">Cuatrimestre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {examenes.map(examen => {
                                        if (examen.materia === materia.id) {
                                            return (
                                                <tr key={examen.id}>
                                                    <td>{
                                                        examen.tipo === 'P1' ? 'Primer Parcial' :
                                                        examen.tipo === 'P2' ? 'Segundo Parcial' :
                                                        examen.tipo === 'R1' ? 'Primer Recuperatorio' :
                                                        examen.tipo === 'R2' ? 'Segundo Recuperatorio' :
                                                        examen.tipo === 'F' ? 'Final' : 'Otro'
                                                    }</td>
                                                    <td>{examen.anio}</td>
                                                    <td>{examen.cuatrimestre === 1 ? 'Primer Cuatrimestre' :
                                                    examen.cuatrimestre === 2 ? 'Segundo Cuatrimestre' : 'Verano'}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Materia;
