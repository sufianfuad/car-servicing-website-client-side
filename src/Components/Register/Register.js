import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
//image
import loginBanner from '../../images/Car-wash.png';
//CSS
import './Register.css';
const Register = () => {
    const [loginUserData, setLoginUserData] = useState({});

    // const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginUserData }
        newLoginData[field] = value;
        setLoginUserData(newLoginData)
        console.log(field, value, newLoginData);
    }
    const handleLogInSubmit = e => {
        if (loginUserData.password !== loginUserData.password2) {
            alert('Your Password Did not match');
            return;
        }
        registerUser(loginUserData.email, loginUserData.password, loginUserData.name)
        e.preventDefault();
    }

    return (
        <>
            <div className="registration-container">
                <div className="container shadow-sm">
                    <div className="row pt-3 d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="login-banner">
                                <img className="img-fluid" src={loginBanner} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="login-form mt-3 form-bg">
                                <h2 className="text-center">Create <span className="account-color">Account</span></h2>
                                {/* {!isLoading && */}
                                <form
                                    onSubmit={handleLogInSubmit}
                                    className="w-75 mx-auto">
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name</label>
                                        <input
                                            name="name"
                                            onBlur={handleOnBlur}
                                            // onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="Enter your Name"
                                            required
                                        />
                                    </div>
                                    {/* === */}
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            onBlur={handleOnBlur}
                                            // onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="Enter your Email"
                                            required
                                        />
                                    </div>
                                    {/* === */}
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            onBlur={handleOnBlur}
                                            // onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="password at least 6 digit"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">ReType Password</label>
                                        <input
                                            type="password"
                                            name="password2"
                                            onBlur={handleOnBlur}
                                            // onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    {/* == */}
                                    <div>
                                        <button
                                            // onClick={handleLogIn}
                                            type="submit" className="btn btn-primary fw-bold 
                                            w-100">Register</button>

                                    </div>
                                    <Link
                                        to="/login">
                                        <a href="">Already Register? Login Please</a>
                                    </Link>
                                </form>
                                {/* } */}
                                {/* {
                                    isLoading && <div className="text-center">
                                        <Spinner animation="border" />
                                    </div>
                                }
                                {
                                    user?.email && <div class="alert alert-success" role="alert">
                                        Successfully Created Account
                                    </div>
                                }
                                {
                                    authError && <Alert variant="danger">
                                        {authError}
                                    </Alert>
                                } */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
        // <section className="login-container">
        //     <h2 className="text-center login-text mb-3">Login Please<span className="dot-color">.</span></h2>

        //     <div className="container">
        //         <div className="row d-flex align-items-center">

        //             <div className="col-lg-6 col-md-6 col-sm-12">
        //                 <div className="login-banner">
        //                     <img src={loginBanner} alt="" />
        //                 </div>
        //             </div>

        //             <div className="col-lg-6 col-md-6 col-sm-12">
        //                 <div className="loginForm-container">
        //                     <form
        //                         onSubmit={handleLogInSubmit}
        //                         className="mx-auto">
        //                         <div class="mb-3">
        //                             <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
        //                             <input
        //                                 name="email"
        //                                 onChange={handleOnChange}
        //                                 className="form-control input"
        //                                 placeholder="Enter your email"
        //                                 required
        //                             />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>
        //                             <input
        //                                 type="password"
        //                                 name="password"
        //                                 onChange={handleOnChange}
        //                                 className="form-control input"
        //                                 placeholder="password at least 6 digit"
        //                             />
        //                         </div>
        //                         <div>
        //                             <button
        //                                 type="submit"
        //                                 className="btn btn-primary fw-bold btn-lg logIn-btn w-100">LogIn</button>
        //                         </div>
        //                         <Link
        //                             to="/login"
        //                         >
        //                             <a href="">Already have a Account? Login</a>

        //                         </Link>
        //                         {/* {
        //                             isLoading && <div className="text-center">
        //                                 <Spinner animation="border" />
        //                             </div>
        //                         } */}
        //                         {/* {
        //                             user?.email && <Alert variant="success">
        //                                 Login Successfully
        //                             </Alert>
        //                         } */}
        //                         {/* {
        //                             authError && <Alert variant="danger">
        //                                 {authError}
        //                             </Alert>
        //                         } */}
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Register;