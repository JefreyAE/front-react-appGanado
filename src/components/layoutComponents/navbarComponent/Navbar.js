import React, {Component} from "react";
import { NavLink, Link, Outlet } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav id="nav-1" className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link " aria-current="page">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Módulo de Animales
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="/navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/animal/index">Listado de animales activos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/animal/dead">Listado de animales fallecidos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/animal/all">Listado de todos los animales registrados</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/animal/register">Registrar un nacimiento</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/animal/search">Buscar un animal</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Módulo de
                                Compras</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" to="/purchases/index/">Listado animales
                                        comprados</a></li>
                                <li><a className="dropdown-item" to="/purchases/register/">Registrar compras</a>
                                </li>
                                <li><a className="dropdown-item" to="/purchases/search/">Consultar compras por
                                        fecha</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="/sales/register/" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Módulo de
                                Ventas</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" to="/sales/index/">Listado animales vendidos</a>
                                </li>
                                <li><a className="dropdown-item" to="/sales/register/">Registrar ventas</a></li>
                                <li><a className="dropdown-item" to="/sales/search/">Consultar ventas por fecha</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="/incidents/register/" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Módulo de
                                Incidentes</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" to="/incidents/index/">Listado de incidentes</a>
                                </li>
                                <li><a className="dropdown-item" to="/incidents/register/">Registrar un
                                        incidentes</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="/injectables/register/" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Módulo de
                                Inyectables</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" to="/injectables/index/">Listado inyectables
                                        aplicados</a></li>
                                <li><a className="dropdown-item" to="/injectables/register/">Registrar aplicación
                                        de inyectable</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="/notifications/index/" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Módulo de
                                Notificaciones</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item"
                                     to="/notifications/index/notificaciones activas">Listado de
                                        notificaciones activas</a></li>
                                <li><a className="dropdown-item"
                                     to="/notifications/checked/notificaciones vistas">Listado de
                                        notificaciones vistas</a></li>
                                <li><a className="dropdown-item"
                                     to="/notifications/indexAll/todas las notificaciones">Listado de todas
                                        las notificaciones</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" id="navbarDropdown"
                              role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Módulo de
                              Estadísticas</a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a className="dropdown-item" to="/statistics/index">Estadísticas globales</a></li>
                              <li><a className="dropdown-item" to="/statistics/auctions">Estadísticas de subastas</a></li>
                          </ul>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" to="/user/profile"
                             to="/user/profile" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Cuenta</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" to="/user/profile">Cambio de contraseña</a></li>
                                <li><a className="dropdown-item" to="/user/logout/">Cerrar sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        );
    }
}

export default Navbar;
