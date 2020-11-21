import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Google Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/" exact> Search &nbsp; </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/saved"> &nbsp; Saved </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="text-center display-4">(React) Google Books Search</h1>
                    <p className="lead text-center">Search for and Save Books of Interest</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
