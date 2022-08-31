import "./signupPage/register.css"
import axios from 'axios';
import React, { useState } from 'react';
import { FaKey, FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RegistrationForm } from "./signupPage/regForm";
import { RegistrationFormValidator } from "./signupPage/regFormValidator";

const registerUrl = `${process.env.REACT_APP_BACKEND_URL}/user/register`;
const path = process.env.PUBLIC_URL;
const logoPath = path + '/images/logo_new2_reduced_transparent.png'

const SignupPage = () => {
    const [invalidForm, setInvalidForm] = useState(null);
    const [regForm, setRegForm] = useState(new RegistrationForm());
    const [successfulReg, setSuccessfulReg] = useState(false);

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

    function updateTermsAcceptedField(){
        regForm.termsAccepted = !regForm.termsAccepted;
        setRegForm(regForm);
    }

    function updateMarketingAcceptedField(){
        regForm.subscriber = !regForm.subscriber;
        setRegForm(regForm);
    }
    
    const register = () => {
        const regFormValidator = new RegistrationFormValidator(regForm);
        regFormValidator.validate();
        if (regFormValidator.formIsValid) { 
            axios
                .post(registerUrl, regForm)
                .then((response) => {
                    if (response.data.success)
                        setSuccessfulReg(true)
                })
                .catch((err) => {
                    if (err.request.status === 406)
                        console.log(err.response.data)
                        regFormValidator.setInvalidFields(err.response.data);
                        setInvalidForm(regFormValidator);
                });
        } else {
            setInvalidForm(regFormValidator);
        }
    }

    function showTermsOfUse(){
        //To be implemented - modal window to be displayed?
    }

    return (
        <div className="bg bg-register">
            <div className="container">
	            <div className="d-flex flex-column justify-content-center h-100">
                    <div className="d-flex justify-content-center">
                        <div className="card d-flex flex-grow-1" style={{maxWidth: "25rem"}}>
                            <div className="d-flex card-header border-0 justify-content-between disable-additional-alpha">
                                <p className="card-title mb-0">Sign Up</p>
                                <img src={logoPath} className="img-fluid nav-logo" alt="MrCook Logo"/>
                            </div>
                            {!successfulReg ? <div className="card-body">
                                
                                <div className="input-group">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <FaUser className="text-light"/>
                                    </span>
                                    <input type="text" className={invalidForm ? !invalidForm.usernameValid ? "form-control is-invalid" : "form-control is-valid" : "form-control"} placeholder="Choose username" onChange={(e) => updateUsernameField(e)} />
                                </div>
                                {invalidForm && !invalidForm.usernameValid ? (<div className="small text-danger mb-3">{invalidForm.usernameValidationResult}</div>):<div className="mb-3"/>}
                                
                                <div className="input-group">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <MdAlternateEmail className="text-light"/>
                                    </span>
                                    <input type="email" className={invalidForm ? !invalidForm.emailValid ? "form-control is-invalid" : "form-control is-valid" : "form-control"} placeholder="Your email" onChange={(e) => updateEmailField(e)} />
                                </div>
                                {invalidForm && !invalidForm.emailValid ? (<div className="small text-danger mb-3">{invalidForm.emailValidationResult}</div>):<div className="mb-3"/>}

                                <div className="input-group">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <FaKey className="text-light"/>
                                    </span>
                                    <input type="password" className={invalidForm ? !invalidForm.passwordValid ? "form-control is-invalid" : "form-control is-valid" : "form-control"} placeholder="Set password" onChange={(e) => updatePasswordField(e)} />
                                </div>
                                {invalidForm && !invalidForm.passwordValid ? (<div className="small text-danger mb-3">{invalidForm.passwordValidationResult}</div>):<div className="mb-3"/>}

                                <div className="input-group">
                                    <span className="input-group-text" style={{backgroundColor: "#ce7432"}}>
                                        <FaKey className="text-light"/>
                                    </span>
                                    <input type="password" className={invalidForm ? !invalidForm.confirmPasswordValid ? "form-control is-invalid" : "form-control is-valid" : "form-control"} placeholder="Confirm password" onChange={(e) => updateConfirmPasswordField(e)} />
                                </div>
                                {invalidForm && !invalidForm.confirmPasswordValid ? (<div className="small text-danger mb-3">{invalidForm.confirmPasswordValidationResult}</div>):<div className="mb-3"/>}

                                <div className="form-check">
                                    <input className="form-check-input custom-color-checkbox" type="checkbox" onChange={() => updateTermsAcceptedField()}/>
                                    <label className="form-check-label small">I accept <button type="button" className="link-button small" onClick={() => showTermsOfUse()}>Terms of Service</button><div className={invalidForm && !invalidForm.termsOfUseValid ? "small text-danger" : "small"}>(required)</div></label> : 
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input custom-color-checkbox" type="checkbox" onChange={() => updateMarketingAcceptedField()}/>
                                    <label className="form-check-label small">I wish to subscribe to mailing list and receive emails with promotion codes and marketing information.<div className="small">(optional)</div></label>
                                </div>
                                {invalidForm ? (<div className="d-flex justify-content-center small text-danger">Cannot submit! Please correct registration form...</div>):<></>}
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-secondary fs-5 px-4 mt-3" onClick={register}>Register</button>
                                </div>
                            </div>  
                            :
                            <div className="card-body">
                                <p className="reg-success text-center mb-3">Thank you for registering!</p>
                                <p className="text-center my-4">You will shortly receive confirmation email describing next steps to finish the registration process. If the email doesn't come soon, please check your spam folder.</p>
                            </div>}
                            
                            <div className="card-footer border-0 disable-additional-alpha">
                                {!successfulReg ?
                                <div className="d-flex justify-content-center quote-text">
                                    Already have an account?&nbsp;<a href="/login">Sign In</a>
                                </div> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;