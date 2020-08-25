import React, { Component } from 'react';


export class Materias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materiasList: []
        }
        this.fetchMaterias = this.fetchMaterias.bind(this);
    }


    fetchMaterias() {
        fetch('http://localhost:8000/api/materias')
        .then(response => response.json())
        .then(data => this.setState({
            materiasList: data
        }))
    }


    UNSAFE_componentWillMount() {
        this.fetchMaterias();
    }

    
    render() {
        let materias = this.state.materiasList;

        return (
            <div className="container">
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
                                        <td>{materia.nombre}</td>
                                        <td>{materia.departamento}</td>
                                        <td>{materia.experimental ? "Si" : "No"}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                    </table> 
            </div>
        )
    }
}

export default Materias;
