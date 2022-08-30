import "./loginPage/login.css"
import axios from 'axios';
import React, { useState } from 'react';
import { FaKey } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom';

const authUrl = "http://localhost:5000/login";
const path = process.env.PUBLIC_URL;
const logoPath = path + '/images/logo_new2_reduced_transparent.png'

const LoginPage = ({setJwt, setUserDetails}) => {
    const [badCredentials, setBadCredentials] = useState(false);
    const [reqBody, setReqBody] = useState({
        email: "",
        password: ""
    });

    function updateEmailField(e){
        reqBody.email = e.target.value;
        setReqBody(reqBody);
    }

    function updatePasswordField(e){
        reqBody.password = e.target.value;
        setReqBody(reqBody);
    }

    const navigate = useNavigate();
    
    const login = () => {
        axios
            .post(authUrl, reqBody)
            .then((response) => {
                setUserDetails(response.data);
                setJwt(response.headers.authorization);
                navigate("/");
            })
            .catch((err) => {
                if (err.request.status === 401){
                    setBadCredentials(true)
                }
            });
    }
    return (
        <div className="bg bg-login">
            <div className="container">
	            <div className="d-flex flex-column justify-content-center h-100">
                    <div className="d-flex justify-content-center">
                        <div className="card d-flex flex-grow-1" style={{maxWidth: "25rem"}}>
                            <div className="d-flex card-header border-0 justify-content-between disable-additional-alpha">
                                <p className="card-title solid mb-0">Sign In</p>
                                <img src={logoPath} className="img-fluid nav-logo" alt="MrCook Logo"/>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <MdAlternateEmail className="text-light"/>
                                    </span>
                                    <input type="email" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Email" onChange={(e) => updateEmailField(e)} />
                                </div>
                                <div className="input-group mb-1">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <FaKey className="text-light"/>
                                    </span>
                                    <input type="password" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Password" onChange={(e) => updatePasswordField(e)} />
                                </div>
                                {badCredentials? (<div className="d-flex justify-content-center small text-danger">Invalid user email and/or password</div>):<></>}
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-secondary fs-5 px-4 mt-3" onClick={login}>Login</button>
                                </div>
                            </div>
                            <div className="card-footer border-0 disable-additional-alpha">
                                <div className="d-flex justify-content-center quote-text">
                                    Don't have an account?&nbsp;<a href="/register">Sign Up</a>
                                </div>
                                <div className="d-flex justify-content-center quote-text">
                                    <a href="/register">Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;