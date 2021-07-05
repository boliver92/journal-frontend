import React from 'react';
import { Link } from "react-router-dom";
import  { Button } from 'react-bootstrap';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="nav-link navbar-brand" to="/">Journal</Link>
            <ul className="col-xs-4 navbar-nav mx-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/journal">My Journal</Link></li>
            </ul>
            <Link to="/login"><Button className="rounded" variant='secondary'>Login/Register</Button></Link>
        </nav>
    );
}

export default Navbar