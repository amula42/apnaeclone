import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <div>
    <header id="site-header" className="header">
        <div id="header-wrap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand logo" to="/">
                            <img id="logo-img" className="img-center" src="images/logo.png" alt="logo" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto mr-auto">

                        <li className="nav-item dropdown" data-toggle="hover">
                            <NavLink className="nav-link " to="/" role="button">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown" data-toggle="hover">
                            <NavLink className="nav-link " to="/about" role="button">About</NavLink>
                        </li>
                        <li className="nav-item dropdown" data-toggle="hover">
                            <NavLink className="nav-link  " to="/services" role="button">Services</NavLink>
                        </li>

                        <li className="nav-item dropdown" data-toggle="hover">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gallery</a>
                                <div className="dropdown-menu">
                                    <ul className="list-unstyled">
                                        <li>
                                            <NavLink to="/photogallery">Photo Gallery</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/videogallery">Video Gallery</NavLink>
                                        </li>
                                    </ul>
                                </div>
                        </li>

                        <li className="nav-item dropdown" data-toggle="hover">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Benefit </a>
                                <div className="dropdown-menu">
                                    <ul className="list-unstyled">
                                        <li>
                                            <NavLink to="/commissionchart">Commission Chart </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/offers">Offers</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/devices"> Devices</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/softwares">Softwares Download</NavLink>
                                        </li>
                                        <li>
                                            <a href="documentation.html">Documentation</a>
                                        </li>
                                        <li>
                                            <a href="offers-may.pdf">Monthly Offer</a>
                                        </li>                               
                                    </ul>
                                </div>
                        </li>
                        <li className="nav-item dropdown" data-toggle="hover">
                            <NavLink className="nav-link  " to="/contact" role="button">Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown" data-toggle="hover">
                            <a className="nav-link blinking  " href="railway_list.html" role="button">Railway Agent List</a>
                        </li>
                        <li>
                            <a href="ApnaEKendra.apk" download="">
                                <img src="images/appicon.png" alt='appicon' style={{width:"37px"}}/>
                            </a>
                        </li> 
                        </ul>
                        </div>
                        <div className="right-nav align-items-center d-flex justify-content-end list-inline">
                            <a className="blinking   btn btn-theme btn-sm" href="signin.html">Login</a>
                            <a className="blinking  btn btn-theme btn-sm" href="membersignup.html" target="__blank">Register</a>
                        </div>
                        </nav>
                    </div>
                </div>
                </div>
            </div>
        </header>
  </div>;
};

export default Navbar;
