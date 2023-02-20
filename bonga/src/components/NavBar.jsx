import React, { useState } from "react";
import logo from "../assets/logo.png";
import Profile from "./Profile";
import Menu from "./Menu";

const NavBar = () => {
    const [showOptions, setShowOptions] = useState(false);

    const [showProfile, setShowProfile] = useState(false);


    function handleClick() {
        setShowOptions(!showOptions);
    }

    function handleClick2() {
        setShowProfile(!showProfile);
    }

    return (
        <div className='navBar'>
            {/*LEFT DIV*/}
            <div className="leftnav">
                <div className="logo-icon">
                    {/*logo */}
                    <img src={logo} alt="icon" />
                </div>
                <div className="searchBar">
                    <input type="search" className="search" placeholder="Search Friend " />
                    <div className="searchicon">
                        <button>
                            <i class="fa fa-search" ></i>
                        </button>

                    </div>

                </div>
            </div>

            {/*RIGHT DIV*/}
            <div className="rightnav">
                <ul>
                    <li>
                        <div className="home-icon">
                            <a href="#home"><i class="fa fa-home"></i><span className="tooltip">Home</span></a>
                        </div>
                    </li>
                    <li>
                        <div className="notification-icon">
                            <a href="#notification"><i class="fa fa-bell"></i><span className="tooltip">Notification</span></a>
                        </div>
                    </li>
                    <li>
                        <div className="message-icon">
                            <a href="#message"><i class="fa fa-comment"></i><span className="tooltip">Message</span></a>
                        </div>
                    </li>
                    <li>
                        <a href="#user">
                            <div>
                                <i className="fa fa-user-circle" onClick={handleClick2}></i>
                                {showProfile && (
                                    <Profile setShowProfile={setShowProfile} />
                                )}
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#menu">
                            <div>
                                <i className="fas fa-bars" onClick={handleClick}></i>
                                {showOptions && (
                                    <Menu setShowOptions={setShowOptions} />
                                )}
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default NavBar;