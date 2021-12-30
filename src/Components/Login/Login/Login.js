import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


//image
import loginBanner from '../../../images/Car-wash.png';
import GoogleLogo from '../../../images/google-logo.png';
//css
import './Login.css';
const Login = () => {
    const [loginUserData, setLoginUserData] = useState({});

    // const [user, logInUser] = useAuth();

    const location = useLocation();

    //===
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginUserData }
        newLoginData[field] = value;
        setLoginUserData(newLoginData)
        console.log(field, value, newLoginData);
    }
    const handleLogInSubmit = e => {
        alert("Hello")
        // logInUser(loginUserData.email, loginUserData.password, location);
        e.preventDefault();
    }


    return (
        <section className="login-container">
            <h2 className="text-center login-text mb-3">Login Please<span className="dot-color">.</span></h2>

            <div className="container">
                <div className="row d-flex align-items-center">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="login-banner">
                            <img src={loginBanner} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="loginForm-container">
                            <form
                                onSubmit={handleLogInSubmit}
                                className="mx-auto">
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                    <input
                                        name="email"
                                        onChange={handleOnChange}
                                        className="form-control input"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        className="form-control input"
                                        placeholder="password at least 6 digit"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary fw-bold btn-lg logIn-btn w-100">LogIn</button>
                                </div>
                                <Link
                                    to="/signup"
                                >
                                    <a href="">New In Car Wash? Create A Account</a>
                                    {/* <button type="text" className="btn btn-primary text-center">New In Super Deluxe? Create A Account</button> */}
                                </Link>
                                {/* {
                                    isLoading && <div className="text-center">
                                        <Spinner animation="border" />
                                    </div>
                                } */}
                                {/* {
                                    user?.email && <Alert variant="success">
                                        Login Successfully
                                    </Alert>
                                } */}
                                {/* {
                                    authError && <Alert variant="danger">
                                        {authError}
                                    </Alert>
                                } */}
                            </form>
                            {/* ============== */}
                            {/* <p className="text-center py-3">---------------------</p>
                            <div className="login">
                                <div className="container text-center mt-2">
                                    <button
                                        // onClick={handleGoogleLogin}
                                        className="btn sign-btn"
                                    ><div className="g-logo-holder">
                                            <img src={GoogleLogo} alt="Google" />
                                        </div>
                                        <div className="sign-text">Sign in with Google</div>
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;