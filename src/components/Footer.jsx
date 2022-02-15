import React from 'react';
import { NavLink } from 'react-router-dom';
import '../data/Globalvar';

const Footer = () => {
  return <div>
        <footer className="footer white-bg pos-r o-hidden bg-contain" style={{backgroundImage: "url(images/pattern/01.png)"}} >
            <div className="round-p-animation"></div>
            <div className="primary-footer">
                <div className="container p-0">
                    <div className="col-lg-12 py-8 md-px-5">
                        <div className="row">

                            <div className="col-lg-4 col-md-4  sm-mt-5">
                                <div className="" style={{backgroundImage: "url(images/bg/02.png)"}}>
                                    <div className="footer-logo">
                                        <NavLink to="/"><img className="img-center" src="images/logo-white.png" alt="" /></NavLink>
                                    </div>
                                    <p className="mb-3">{global.company} is a  one-stop b2b digital services provider in india. Which is providing all types of digital services<br/>(aeps, bbps, dmt, banking, utility bill, travel & all recharge)  at an affordable price with lots of benefits. </p>
                                    <div className="social-icons social-border circle social-hover ">
                                        <ul className="list-inline">
                                            <li className="social-facebook">
                                                <a href="https://www.facebook.com/apnaekendra" target="__blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="social-twitter">
                                                <a href="https://twitter.com/ApnaKendra" target="__blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="social-linkedin">
                                                <a href="https://www.youtube.com/channel/UCOVpBkDAvCuIgMH6LgB8fIw" target="__blank">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="social-skype">
                                                <a href="https://in.pinterest.com/apnaekendra/_created/" target="__blank">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 footer-list">
                                <h4 className="title">Useful Links</h4>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <ul className="list-unstyled">
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/about">About Us</NavLink></li>
                                            <li><NavLink to="/services">Services</NavLink></li>
                                            <li><NavLink to="/photogallery">Photo Gallery</NavLink></li>
                                            <li><NavLink to="/videogallery">Video Gallery</NavLink></li>
                                            <li><NavLink to="privacypolicy.html">Privacy Policy</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-7">
                                        <ul className="list-unstyled">
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                            <li><NavLink to="/commissionchart">Commission Chart </NavLink></li>
                                            <li><NavLink to="/offers">Offers</NavLink></li>
                                            <li><NavLink to="/devices"> Devices</NavLink></li>
                                            <li><NavLink to="/softwares">Softwares Download</NavLink></li>
                                            <li><NavLink to="termsandcondition.html">Terms & Condition</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4  sm-mt-5">
                                <h4 className="title">Contact us</h4>
                                <ul className="media-icon list-unstyled">
                                    <li><p className="mb-0">
                                        <i className="fas fa-map-marker" aria-hidden="true"></i>
                                        <span id="lbladdress">C-B 2/5,Shivangi Tower, Vibhuti Khand Gomti Nagar, Lucknow 226010</span>
                                        </p>
                                    </li>
                                    <li><a href="/">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span id="lblemail">support@apnaekendra.in</span>
                                        </a>
                                    </li>
                                    <li><a href="/">
                                        <i className="fa fa-phone" aria-hidden="true"></i>+91-<span id="lblmob2"></span></a>
                                    </li>
                                    <li><a href="/">
                                        <i className="fa fa-phone" aria-hidden="true"></i>+91-<span id="lblmob1">9076617189</span></a>
                                    </li>
                                    <li><a href="/">
                                        <i className="fa fa-phone" aria-hidden="true"></i>+91-9076617200</a>
                                    </li>
                                    <li><a href="/">
                                        <i className="fa fa-phone" aria-hidden="true"></i>+91-9076617199</a>
                                    </li>
                                    <li><a href="/">
                                        <i className="fa fa-phone" aria-hidden="true"></i>+91-9076617192</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondary-footer">
                <div className="container">
                <div className="copyright">
                    <div className="row align-items-center">
                    <div className="col-md-6"> <span><span id="lblcopywrite">All Right Reserve {global.company}</span></span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
  </div>;
};

export default Footer;
