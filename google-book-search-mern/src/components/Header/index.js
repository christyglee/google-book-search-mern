import React from "react";
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Google Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                    <div className="searchlink">
                        <li className="nav-item active">
                       <li> <NavLink to="/" exact> Search &nbsp; </NavLink> </li>
                            {/* <a className="nav-link" href="/">Search <span className="sr-only">(current)</span></a> */}
                        </li>
                        </div>
                        <br></br>
                        <div className="savedlink">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/saved">Saved</a> */}
                            <li> <NavLink to="/saved"> &nbsp; Saved </NavLink> </li>
                        </li>
                        </div>
                    </ul>
                </div>
            </nav>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="text-center display-4">(React) Google Books Search</h1>
                    <p class="lead text-center">Search for and Save Books fo Interest</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
