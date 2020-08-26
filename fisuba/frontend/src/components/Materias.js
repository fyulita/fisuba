import React, { Component } from 'react';


export class Materias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materiasList: []
        }
        this.getCookie = this.getCookie.bind(this);
        this.fetchMaterias = this.fetchMaterias.bind(this);
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
    
    
    fetchMaterias() {
        fetch(`/api/materias`, {
            method: 'GET',
            headers: {
                'X_CSRFToken': this.getCookie('csrftoken'),
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            materiasList: data
        }))
        .catch(err => console.log(err))
    }


    UNSAFE_componentWillMount() {
        this.fetchMaterias();
    }

    
    render() {
        const materias = this.state.materiasList;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Materias Obligatorias</h1>
                        <br/>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Experimental</th>
                                </tr>
                            </thead>
                            <tbody>
                                {materias.map((materia, index) => {
                                    if (materia.obligatoria) {
                                        return (
                                            <tr key={index}>
                                                <td><a href={`/materia/${materia.id}`}>{materia.nombre}</a></td>
                                                <td>{materia.departamento}</td>
                                                <td>{materia.experimental ? "Si" : "No"}</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <h1>Materias Optativas</h1>
                        <br/>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Experimental</th>
                                </tr>
                            </thead>
                            <tbody>
                                {materias.map((materia, index) => {
                                    if (!materia.obligatoria) {
                                        return (
                                            <tr key={index}>
                                                <td><a href={`/materia/${materia.id}`}>{materia.nombre}</a></td>
                                                <td>{materia.departamento}</td>
                                                <td>{materia.experimental ? "Si" : "No"}</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Materias;
