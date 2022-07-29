import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const path = process.env.PUBLIC_URL;
const logoPath = path + '/images/logo_new2_reduced_transparent.png'


class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="light" expand="md" sticky="top">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logoPath} className="nav-logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className='nav-link active'>Product</Link>
                            <Link to="/recipes" className='nav-link active'>Recipes</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/login" className='nav-link active px-1'>
                        <button className="btn btn-outline-primary">Login</button>
                    </Link>
                    
                    <Link to="/signup" className='nav-link active px-1'>
                        <button className="btn btn-secondary">Signup</button>
                    </Link>
                </Container>
            </Navbar>
            // <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
            //     <div className="container-fluid">
            //         <Link to="/" className='navbar-brand'>Mr Cook</Link>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <Link to="/login" className='nav-link active px-1'>
            //             <button className="btn btn-primary">Login</button>
            //         </Link>
                    
            //         <Link to="/signup" className='nav-link active px-1'>
            //             <button className="btn btn-primary">Signup</button>
            //         </Link>
            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul className="navbar-nav me-auto mb-2 mb-md-0">
            //                 <li className="nav-item">
            //                     <Link to="/" className='nav-link active'>Product</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link to="/recipes" className='nav-link active'>Recipes</Link>
            //                 </li>
            //             </ul>
            //         </div>
                    

            //     </div>
            // </nav>
        );
    }
}

export default NavigationBar;