import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const authUrl = "http://localhost:5000/login";

const LoginPage = ({setJwt, setUserDetails}) => {
    const navigate = useNavigate();

    const login = () => {
        const reqBody = {
            username: "marian",
            password: "pass3"
        }

        axios
            .post(authUrl, reqBody)
            .then((response) => {
                setUserDetails(response.data);
                setJwt(response.headers.authorization);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button className="btn btn-outline-primary fs-5" onClick={login}>Login</button>
    );
}

export default LoginPage;