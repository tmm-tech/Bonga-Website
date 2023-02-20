import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className="footerContainer">

            <div className="section1">
                <div className="sectiona">
                    <div className="logo-icon">
                        <img src={logo} alt="icon" />
                    </div>
                    <p>The trio took this simple idea and built it into the <br />
                        world's leading carpooling platform.
                    </p>
                    <ul>
                        <li>
                            <a href="#address"><span><i class="fa fa-map-marker" ></i></span>33 new montgomery st.750 san francisco, CA USA 94105.</a>
                        </li>
                        <li>
                            <a href="#telephone"><span><i class="fa fa-mobile"></i></span>+1-56-346 345</a>
                        </li>
                    </ul>
                </div>

                <div className="sectionb">
                    <div className="section">
                        <h5 >follow</h5>

                        <ul >
                            <li>
                            <a href="#facebook"><span className="facebook"><i className="fab fa-facebook-square" ></i></span> Facebook</a>
                            </li>
                            <li>
                                <a href="https://twitter.com"><span><i className="fab fa-twitter-square" ></i></span> Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com"><span><i className="fab fa-instagram" ></i></span> Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.google.com"><span><i className="fab fa-google-plus-square" ></i></span> Google+</a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com"><span><i className="fab fa-pinterest-square" ></i></span> Pinterest</a>
                            </li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5 >navigate</h5>
                        <ul >
                            <li>
                                <a href="#index">about us</a>
                            </li>
                            <li>
                                <a href="#products">contact us</a>
                            </li>
                            <li>
                                <a href="#deals">terms & conditions</a>
                            </li>
                            <li>
                                <a href="#deals">RSS Syndication</a>
                            </li>
                            <li>
                                <a href="#deals">sitemap</a>
                            </li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5 >useful links</h5>

                        <ul >
                            <li>
                                <a href="#ebay" >leasing</a>
                            </li>
                            <li>
                                <a href="#user" >submit route</a>
                            </li>
                            <li>
                                <a href="#local" >how does it work?</a>
                            </li>
                            <li>
                                <a href="#local" >agent listings</a>
                            </li>
                            <li>
                                <a href="#local" >view all</a>
                            </li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5 >download apps</h5>

                        <ul >
                            <li>
                                <button className="appBtn">
                                    <span><i className="fab fa-android" ></i></span> Android
                                </button>
                            </li>
                            <li>
                                <button className="appBtn">
                                    <span><i className="fab fa-apple" ></i></span> IPhone
                                </button>
                            </li>
                            <li>
                                <button className="appBtn">
                                    <span><i className="fab fa-windows" ></i></span> Windows
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div >

    );
}

export default Footer;