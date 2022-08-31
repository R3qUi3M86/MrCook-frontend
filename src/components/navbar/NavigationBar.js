import React from 'react';
import {Link} from 'react-router-dom';
import {FaUserAlt} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
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
                        {userDetails.member ? <Link to="/create" className='nav-link active fs-5'>Create</Link> : <></>}
                        {userDetails.roles === "ADMIN" ? <Link to="/admin" className='nav-link active fs-5'>Admin</Link> : <></>}
                    </Nav>
                </Navbar.Collapse>
                {!userDetails.id ?
                <>
                    <Link to="/login" className='nav-link active px-1'>
                        <button className="btn btn-outline-primary fs-6">Login</button>
                    </Link>
                    
                    <Link to="/register" className='nav-link active px-1'>
                        <button className="btn btn-secondary">Register</button>
                    </Link>
                </> :
                <>
                    <Link to="/user" className='nav-link active px-1'>
                        <button className="btn btn-secondary"><FaUserAlt className="mb-1"/></button>
                    </Link>
                    <button className="btn btn-primary me-1" onClick={() => logout()}><FiLogOut className="mb-1"/></button>
                </>
                }
            </Container>
        </Navbar>
    );
}

export default NavigationBar;