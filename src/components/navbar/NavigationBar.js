import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const path = process.env.PUBLIC_URL;
const logoPath = path + '/images/logo_new2_reduced_transparent.png'


const NavigationBar = ({userDetails, setJwt, setUserDetails}) => {
    function logout(){
        console.log("logged out");
        setJwt("");
        setUserDetails({
            id: undefined,
            username: undefined,
            member: false,
            banned: false,
            productComment: false
        })
    }

    return (
        <Navbar bg="light" expand="md" fixed="top" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand>
                    <img src={logoPath} className="nav-logo" alt="MrCook Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link active fs-5'>Product</Link>
                        <Link to="/recipes" className='nav-link active fs-5'>Recipes</Link>
                        
                    </Nav>
                </Navbar.Collapse>
                {!userDetails.username ? (
                <Fragment>
                    <Link to="/login" className='nav-link active px-1'>
                        <button className="btn btn-outline-primary fs-5">Login</button>
                    </Link>
                    
                    <Link to="/signup" className='nav-link active px-1'>
                        <button className="btn btn-secondary fs-5">Signup</button>
                    </Link>
                </Fragment>) :
                <button className="btn btn-outline-secondary fs-5" onClick={() => logout()}>Logout</button>
                }
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

export default NavigationBar;