import React from 'react';


export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-primary bg-primary">
                <a className="navbar-brand" href="#">FISUBA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Materias
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Obligatorias</a>
                            <a class="dropdown-item" href="#">Optativas</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre esta página</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;
