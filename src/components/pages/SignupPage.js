import "./registerPage/register.css"
import axios from 'axios';
import React, { useState } from 'react';
import { FaKey, FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import { RegistrationForm } from "./registerPage/registrationForm";

const authUrl = "http://localhost:5000/register";
const path = process.env.PUBLIC_URL;
const logoPath = path + '/images/logo_new2_reduced_transparent.png'

const SignupPage = ({setJwt, setUserDetails}) => {
    const [badCredentials, setBadCredentials] = useState(null);
    const [regForm, setRegForm] = useState(new RegistrationForm());

    function updateUsernameField(e){
        regForm.username = e.target.value;
        setRegForm(regForm);
    }

    function updateEmailField(e){
        regForm.email = e.target.value;
        setRegForm(regForm);
    }

    function updatePasswordField(e){
        regForm.password = e.target.value;
        setRegForm(regForm);
    }

    function updateConfirmPasswordField(e){
        regForm.confirmPassword = e.target.value;
        setRegForm(regForm);
    }

    function updateTermsAcceptedField(e){
        regForm.termsAccepted = e.target.value;
        setRegForm(regForm);
    }

    const navigate = useNavigate();
    
    const register = () => {
        // axios
        //     .post(authUrl, regForm)
        //     .then((response) => {
        //         setUserDetails(response.data);
        //         setJwt(response.headers.authorization);
        //         navigate("/");
        //     })
        //     .catch((err) => {
        //         if (err.request.status === 401){
        //             setBadCredentials(true)
        //         }
        //     });
    }
    return (
        <div className="bg bg-register">
            <div className="container">
	            <div className="d-flex flex-column justify-content-center h-100">
                    <div className="d-flex justify-content-center">
                        <div className="card d-flex flex-grow-1" style={{maxWidth: "25rem"}}>
                            <div className="d-flex card-header border-0 justify-content-between disable-additional-alpha">
                                <p className="card-title solid mb-0">Sign Up</p>
                                <img src={logoPath} className="img-fluid nav-logo" alt="MrCook Logo"/>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <FaUser className="text-light"/>
                                    </span>
                                    <input type="email" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Choose username" onChange={(e) => updateUsernameField(e)} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <MdAlternateEmail className="text-light"/>
                                    </span>
                                    <input type="email" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Your email" onChange={(e) => updateEmailField(e)} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <FaKey className="text-light"/>
                                    </span>
                                    <input type="password" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Set password" onChange={(e) => updatePasswordField(e)} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <FaKey className="text-light"/>
                                    </span>
                                    <input type="password" className={badCredentials? "form-control is-invalid" : "form-control"} placeholder="Confirm password" onChange={(e) => updateConfirmPasswordField(e)} />
                                </div>
                                {badCredentials? (<div className="d-flex justify-content-center small text-danger">Invalid user email and/or password</div>):<></>}
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-secondary fs-5 px-4 mt-3" onClick={register}>Register</button>
                                </div>
                            </div>
                            <div className="card-footer border-0 disable-additional-alpha">
                                <div className="d-flex justify-content-center quote-text">
                                    Already have an account?&nbsp;<a href="/login">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;